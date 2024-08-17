// Functionality for GitHub Dorks section
let originalDorks = [];

// Fetch dorks from the GitHub repository
async function fetchDorks() {
    const url = "https://raw.githubusercontent.com/Vulnpire/bounty-search-engine/main/dorks/git-dorks.md";
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

// Create a list item for each dork
function createDorkListItem(dork, description) {
    const githubLink = `https://github.com/search?q=${encodeURIComponent(dork)}&type=Code`;

    const listItem = document.createElement("li");

    if (description && description !== prevTitle) {
        const desc = document.createElement("p");
        desc.textContent = description;
        desc.classList.add("description");
        listItem.appendChild(desc);
        prevTitle = description;
    }

    const link = document.createElement("a");
    link.href = githubLink;
    link.textContent = dork;
    link.classList.add("dorkLink");
    link.target = "_blank";
    link.addEventListener("click", () => {
        link.classList.add("clicked");
    });

    listItem.appendChild(link);

    return listItem;
}

// Update the domain in the dorks
function updateDomain() {
    const domainInput = document.getElementById("domainInput");
    const domain = domainInput.value.trim();

    if (!domain) return;

    const dorkLinks = document.querySelectorAll(".dorkLink");
    dorkLinks.forEach((link, index) => {
        let originalDork = originalDorks[index];

        // Replace 'example.com' in the dork
        const updatedDork = originalDork.replace(/example\.com/gi, domain);

        // Update the link and the displayed text
        const updatedLink = `https://github.com/search?q=${encodeURIComponent(updatedDork)}&type=Code`;

        link.textContent = updatedDork;
        link.href = updatedLink;
        link.classList.remove("clicked"); // Reset the color
    });
}

// Attach event listeners to the update button and input field
const updateDomainButton = document.getElementById("updateDomainButton");
updateDomainButton.addEventListener("click", updateDomain);

const domainInput = document.getElementById("domainInput");
domainInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        updateDomain();
    }
});

// Fetch and display dorks initially
fetchDorks();
