# Google Dorks

A list of Google Dorks for Bug Bounty.

---
### Broad domain search with negative search

> site:example.com -www -shop -share -ir -mfa

### 1. PHP|ASP|ASPX|JSP|JSPX EXTENSION WITH PARAMETERS

> site:example.com ext:php inurl:?

> site:example.com ext:aspx inurl:?

> site:example.com ext:asp inurl:?

> site:example.com ext:jsp inurl:?

> site:example.com ext:jspx inurl:?

### 2. FORM
> site:example.com intitle:"Submit Feedback" | intitle:"Contact us" | intitle:"Join Our Waitlist" | intitle:"Subscribe" | intitle:"Newsletter" | intitle:"Unsubscribe" | intitle:"Email Support" | intitle:"Customer Support"

### 3. LOGIN
> site:example.com inurl:login | inurl:signin | intitle:Login | intitle:"sign in" | inurl:auth | inurl:/register

> site:example.com inurl:login | inurl:logon | inurl:sign-in | inurl:signin | inurl:portal

### 3. PORTS
> site:example.com inurl:"8443/login.jsp"

> site:example.com:8888

### 4. UPLOAD
> site:example.com "choose file"

### 5. INDEX
> site:example.com intext:"index of" "parent directory"

### 6. SWAGGER-UI
> site:example.com intitle:"Swagger UI" | inurl:"index.html" | inurl:"swagger" | inurl:"restapi" | inurl:"classicapi" | inurl:"api" | inurl:"apidocs" | inurl:"clicktrack" | inurl:"doc" | inurl:"static" | inurl:"documentation" | inurl:"openapi" | inurl:"explore" | inurl:"v1" | inurl:"v2" | inurl:"v3" | inurl:"v4" | inurl:"developer" | inurl:"apidoc" | inurl:"document" | inurl:"govpay" | inurl:"routes" | inurl:"application" | inurl:"graphql" | inurl:"playground" | inurl:"apis" | inurl:"public" | inurl:"schema" | inurl:"spec" | inurl:"gateway"

### 7. PEOPLESOFT
> site:example.com intitle:"Oracle+PeopleSoft+Sign-in"

### 8. IIS
> site:example.com intitle:"IIS Windows Server"

### 9. PHPMYADMIN
> site:example.com inurl:"setup/index.php" | inurl:"phpmyadmin" | inurl:"phpMyAdmin" | inurl:"admin/phpMyAdmin" | inurl:"pma/setup/index.php" | intitle:"index of /phpMyAdmin"

### 10. GIT
> site:example.com "index of /.git" | intext:"index of /.git" "parent directory"

### 11. GEOSERVER
> site:example.com inurl:/geoserver/web/

### 12. GRAFANA
> site:example.com intitle:"Grafana"

### 13. PHPLDAPADMIN
> site:example.com intitle:"phpLDAPadmin"

> site:example.com intitle:"phpLDAPadmin" inurl:cmd.php

### 14. JENKINS
> site:example.com intitle:"Dashboard [Jenkins]"

> site:example.com intitle:"Sign in [Jenkins]" inurl:"login?from" 

### 15. WERKZEUG
> site:example.com intitle:"Werkzeug"

### 16. SYMFONY
> site:example.com intitle:"Symfony"

### 17. WEBFLOW
> site:example.com intext:"The page you are looking for doesn't exist or has been moved."

### 18. JOOMLA
> site:example.com intext:"Joomla! - Open Source Content Management"

> site:example.com site:*/joomla/administrator

### 19. EMAIL
> site:example.com (filetype:doc OR filetype:xlsx) intext:@gmail.com

### 20. LOG
> site:example.com intitle:index.of intext:log

### 21. WP-CONTENT
> site:example.com intext:"index of" "wp-content.zip"

### 22. ADMIN.ZIP
> site:example.com intitle:"index of /" "admin.zip" "admin/"

### 23. ADMIN.ZIP
> site:example.com intext:"Index of" intext:"/etc"

### 24. BACKUP.TAR
> site:example.com intext:"Index of" intext:"backup.tar"

### 25. BACKEND
> site:example.com intext:"Index of" intext:"backend/"

### 26. SOURCE-CODE
> site:example.com Index of" intext:"source_code.zip | Index of" intext:"zip

### 27. DOCKER-COMPOSE
> site:example.com intitle:"index of" "docker-compose.yml"

### 28. WP-ADMIN
> site:example.com intitle:"Index of" wp-admin

### 29. PDF|DOC|XLS|CSV|PPT|TXT
> site:example.com ext:pdf

> site:example.com ext:doc | ext:docx

> site:example.com ext:xls | ext:xlsx

> site:example.com ext:csv

> site:example.com ext:ppt | ext:pptx

> site:example.com ext:txt

### 30. JUICY EXTENSIONS
> site:example.com ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess

### 31. SENSITIVE INFORMATION
> site:example.com ext:doc | ext:docx intext:"internal use only | confidential"

> site:example.com ext:pdf intext:"internal use only | confidential"

### 32. ENDPOINTS
> site:example.com inurl:=

> site:example.com inurl:&
