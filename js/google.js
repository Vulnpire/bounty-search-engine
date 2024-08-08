// Variables for search
let currentPage = 1;
const resultsPerPage = 10;  // Google Custom Search returns up to 10 results per page

// Array of API keys for rotation
const apiKeys = [
    'AIzaSyC1dJFqnh9aU3XzT0atBz9jm7PpU58IKf0',
    'AIzaSyAC9XwXC7PC_gq1Rv1ImrLoM28hShlscDo',
    'AIzaSyAmIVZk_swF9RQ-6mmp-jJa03njc-MKyfM',
    'AIzaSyBk6XafrFvNWSTsJyw3OuWeBREXpMKHAzI',
    'AIzaSyAcbHnaoD6NX_XtykjoPsNLJq1V__1ik2Y',
    'AIzaSyBRQCa-hAcN0r6U6vFq7mgW-DNNi5AvB9I',
    'AIzaSyCH4aYKkO4TKyLuPBWth-TFoYkU2DcOFOI'
];
let currentApiKeyIndex = 0;

// Get current API key
function getCurrentApiKey() {
    return apiKeys[currentApiKeyIndex];
}

// Switch to the next API key
function switchApiKey() {
    currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
}

// Global variable to store the current domain(s)
let currentDomains = [];

// Function to perform search with pagination
async function performSearch(startIndex = 1, query = null, notify = false, retries = 3) {
    const maxDomainsPerQuery = 5; // Limit the number of domains per query
    let queryDomains = currentDomains.slice(0, maxDomainsPerQuery);

    if (!query) {
        query = document.getElementById("searchInput").value;
    }
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = '';

    if (!query) {
        resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    if (queryDomains.length > 0) {
        query = queryDomains.map(domain => query.replace(/example\.com/g, domain)).join(' OR ');
    }

    const delay = Math.floor(Math.random() * 1000);
    setTimeout(async () => {
        const apiKey = getCurrentApiKey();
        const cx = '759aed2f7b4be4b83';
        const googleApiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}&start=${startIndex}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(googleApiUrl)}`;

        try {
            const response = await fetch(proxyUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const jsonData = JSON.parse(data.contents);

            if (jsonData.error && jsonData.error.code === 429) {
                switchApiKey();
                performSearch(startIndex, query, notify, retries);
                return;
            }

            if (jsonData.items) {
                displayResults(jsonData.items);
                setupPaginationControls(jsonData.queries, startIndex, query);
                if (notify) {
                    showNotification(`Results found`);
                }
            } else {
                resultsContainer.innerHTML = '<p>No results found.</p>';
                if (notify) {
                    showNotification('No results found');
                }
            }
        } catch (error) {
            if (retries > 0) {
                setTimeout(() => performSearch(startIndex, query, notify, retries - 1), 3000);
            } else {
                resultsContainer.innerHTML = `<p>Error fetching search results: ${error.message}</p>`;
                if (notify) {
                    showNotification('Error fetching search results');
                }
            }
        }
    }, delay);
}




// Display search results
function displayResults(items) {
    const resultsContainer = document.getElementById("resultsContainer");
    items.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";

        const title = document.createElement("a");
        title.href = item.link;
        title.textContent = item.title;
        title.target = "_blank";

        const snippet = document.createElement("p");
        snippet.textContent = item.snippet;

        resultItem.appendChild(title);
        resultItem.appendChild(snippet);

        resultsContainer.appendChild(resultItem);
    });
}

// Setup pagination controls
function setupPaginationControls(queries, startIndex, query) {
    const paginationControls = document.getElementById("paginationControls");
    paginationControls.innerHTML = '';

    // Pagination data from the API response
    const totalResults = parseInt(queries.request[0].totalResults, 10);
    const previousIndex = startIndex - resultsPerPage;
    const nextIndex = startIndex + resultsPerPage;

    // Previous button
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.disabled = startIndex <= 1;
    prevButton.addEventListener("click", () => performSearch(previousIndex, query));
    paginationControls.appendChild(prevButton);

    // Next button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = nextIndex > totalResults;
    nextButton.addEventListener("click", () => performSearch(nextIndex, query));
    paginationControls.appendChild(nextButton);
}

// Event listener for search button
document.getElementById("searchButton").addEventListener("click", function (event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput !== '') {
        currentPage = 1;
        performSearch(currentPage, searchInput, false); // Pass false to not show notification
    }
});

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";
    clearTimeout(notification.timeout); // Clear any existing timeout to reset
    notification.timeout = setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}

// Event listener for Enter key in search input
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const searchInput = this.value.trim();
        if (searchInput !== '') {
            currentPage = 1;
            performSearch(currentPage, searchInput, false); // Pass false to not show notification
        }
    }
});

// Functionality for Google Dorks section
let originalDorks = [];

async function fetchDorks() {
    const url = "https://raw.githubusercontent.com/Vulnpire/bounty-search-engine/main/dorks/google-dorks.md";
    const response = await fetch(url);
    const text = await response.text();

    const dorkList = document.getElementById("dorkList");
    const regex = /(?:^### (.+)|^> (.+))/gm;
    let match;
    let title = '';
    let firstDork = true;

    while ((match = regex.exec(text)) !== null) {
        if (match[1]) {
            // Title match
            title = match[1];
        } else {
            // Dork match
            if (firstDork) {
                firstDork = false;
                continue;
            }
            const dork = match[2];
            originalDorks.push(dork);
            const listItem = createDorkListItem(dork, title);
            dorkList.appendChild(listItem);
        }
    }
}

let prevTitle = '';

function createDorkListItem(dork, description) {
    const listItem = document.createElement("li");

    if (description && description !== prevTitle) {
        const desc = document.createElement("p");
        desc.textContent = description;
        desc.classList.add("description");
        listItem.appendChild(desc);
        prevTitle = description;
    }

    const link = document.createElement("a");
    link.textContent = dork;
    link.classList.add("dorkLink");
    link.href = "#";
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const updatedDork = currentDomains.length > 0 ?
            currentDomains.map(domain => dork.replace(/example\.com/g, domain)).join(' OR ') :
            dork;
        document.getElementById("searchInput").value = updatedDork;
        performSearch(1, updatedDork, true); // Pass true to show notification
    });

    listItem.appendChild(link);

    return listItem;
}

// Update domain function
function updateDomain() {
    const domainInput = document.getElementById("domainInput");
    currentDomains = domainInput.value.split(",").map(domain => domain.trim());

    // Update dork links with new domains
    const dorkLinks = document.querySelectorAll(".dorkLink");
    dorkLinks.forEach((link, index) => {
        const originalDork = originalDorks[index];
        const updatedDork = currentDomains.length > 0 ?
            currentDomains.map(domain => originalDork.replace(/example\.com/g, domain)).join(' OR ') :
            originalDork;
        link.textContent = updatedDork;
    });

    // Clear search results
    clearSearchResults();
}

document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".cheatsheet-tab .category h3");
    categories.forEach(category => {
        category.addEventListener("click", function () {
            const ul = this.nextElementSibling;
            ul.style.display = ul.style.display === "block" ? "none" : "block";
            this.textContent = this.textContent.endsWith("+")
                ? this.textContent.replace("+", "-")
                : this.textContent.replace("-", "+");
        });
    });
});

// Clear search results function
function clearSearchResults() {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = '';
}

document.getElementById("domainInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        updateDomain();
    }
});

// Event listener for "Update Domain" button
document.getElementById("updateDomainButton").addEventListener("click", function (event) {
    event.preventDefault();
    updateDomain();
});

// Fetch dorks on page load
fetchDorks();
