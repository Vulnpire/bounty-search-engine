# Google Dorks

A list of Google Dorks for Bug Bounty.

---
### Broad domain search with negative search

> site:example.com -www -shop -share -ir -mfa

### PHP|ASP|ASPX|JSP|JSPX EXTENSION WITH PARAMETERS

> site:example.com ext:php inurl:?
 
> site:example.com ext:aspx inurl:?
 
> site:example.com ext:asp inurl:?

> site:example.com ext:jsp inurl:?

> site:example.com ext:jspx inurl:?

### FORM

> site:example.com intitle:"Submit Feedback" | intitle:"Contact us" | intitle:"Join Our Waitlist" | intitle:"Subscribe" | intitle:"Newsletter" | intitle:"Unsubscribe" | intitle:"Email Support" | intitle:"Customer Support"

### LOGIN

> site:example.com inurl:login | inurl:signin | intitle:Login | intitle:"sign in" | inurl:auth | inurl:/register
> site:example.com inurl:login | inurl:logon | inurl:sign-in | inurl:signin | inurl:portal

### FILECATALYST FILE TRANSFER

> site:example.com intitle:"FileCatalyst file transfer solution"

### XAMPP DEFAULT DASHBOARD PANELS

> site:example.com intext:"Welcome to XAMPP for *" intitle:"Welcome to XAMPP" inurl:/dashboard
> site:example.com intext:apache + mariadb + php + perl intext:"welcome to xampp for *"
> site:example.com intitle:"welcome to xampp"

### CONFIG.YAML

> site:example.com "configmap.yaml" | "config.yaml" | "*-config.yaml" intitle:"index of"

### SETTINGS.PHP

> site:example.com intitle:"index of" setting.php

### ADMIN

> site:example.com inurl:admin | administrator | adm | login | l0gin | wp-login
> intitle:"login" "admin" site:example.com
> intitle:"index of / admin" site:example.com
> inurl:admin intitle:admin intext:admin site:example.com

### PORTS

> site:example.com inurl:"8443/login.jsp"
> site:example.com:8888

### RCE PRONE PARAMETERS

> site:example.com inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping= inurl:&

### UPLOAD

> site:example.com "choose file"

### INDEX

> site:example.com intext:"index of" "parent directory"

### SWAGGER-UI

> site:example.com intitle:"Swagger UI" | inurl:"index.html" | inurl:"swagger" | inurl:"restapi" | inurl:"classicapi" | inurl:"api" | inurl:"apidocs" | inurl:"clicktrack" | inurl:"doc" | inurl:"static" | inurl:"documentation" | inurl:"openapi" | inurl:"explore" | inurl:"v1" | inurl:"v2" | inurl:"v3" | inurl:"v4" | inurl:"developer" | inurl:"apidoc" | inurl:"document" | inurl:"govpay" | inurl:"routes" | inurl:"application" | inurl:"graphql" | inurl:"playground" | inurl:"apis" | inurl:"public" | inurl:"schema" | inurl:"spec" | inurl:"gateway"

### PEOPLESOFT

> site:example.com intitle:"Oracle+PeopleSoft+Sign-in"

### IIS

> site:example.com intitle:"IIS Windows Server"

### PHPMYADMIN

> site:example.com inurl:"setup/index.php" | inurl:"phpmyadmin" | inurl:"phpMyAdmin" | inurl:"admin/phpMyAdmin" | inurl:"pma/setup/index.php" | intitle:"index of /phpMyAdmin"

### GIT

> site:example.com "index of /.git" | intext:"index of /.git" "parent directory"

### GEOSERVER

> site:example.com inurl:/geoserver/web/

### GRAFANA

> site:example.com intitle:"Grafana"

### PHPLDAPADMIN

> site:example.com intitle:"phpLDAPadmin"
> site:example.com intitle:"phpLDAPadmin" inurl:cmd.php

### EDITOR UPLOAD

> site:example.com inurl:"/fckeditor/editor/filemanager/connectors"

### ENV VARS

> site:example.com intitle:"index of" env.cgi

### OEMBED API

> site:example.com inurl:"/wp-json/oembed/1.0/embed?url="

### APACHE STRUTS 2.x PATH TRAVERSAL

> site:example.com intitle:"Apache Struts 2.5" "index of /" -git

### JENKINS

> site:example.com intitle:"Dashboard [Jenkins]"
> site:example.com intitle:"Sign in [Jenkins]" inurl:"login?from" 

### WERKZEUG

> site:example.com intitle:"Werkzeug"

### SYMFONY

> site:example.com intitle:"Symfony"

### WEBFLOW

> site:example.com intext:"The page you are looking for doesn't exist or has been moved."

### JOOMLA

> site:example.com intext:"Joomla! - Open Source Content Management"
> site:example.com site:*/joomla/administrator

### EMAIL

> site:example.com (filetype:doc OR filetype:xlsx) intext:@gmail.com

### LOG

> site:example.com intitle:index.of intext:log

### WP-CONTENT

> site:example.com intext:"index of" "wp-content.zip"

### ADMIN.ZIP

> site:example.com intitle:"index of /" "admin.zip" "admin/"

### ADMIN.ZIP

> site:example.com intext:"Index of" intext:"/etc"

### BACKUP.TAR

> site:example.com intext:"Index of" intext:"backup.tar"

### BACKEND

> site:example.com intext:"Index of" intext:"backend/"

### SOURCE-CODE

> site:example.com Index of" intext:"source_code.zip | Index of" intext:"zip

### DOCKER-COMPOSE

> site:example.com intitle:"index of" "docker-compose.yml"

### WP-ADMIN

> site:example.com intitle:"Index of" wp-admin

### PDF|DOC|XLS|CSV|PPT|TXT

> site:example.com ext:pdf
> site:example.com ext:doc | ext:docx
> site:example.com ext:xls | ext:xlsx
> site:example.com ext:csv
> site:example.com ext:ppt | ext:pptx
> site:example.com ext:txt

### INTERESTING EXTENSIONS

> site:example.com ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess

### SENSITIVE INFORMATION

> site:example.com ext:doc | ext:docx intext:"internal use only | confidential"
> site:example.com ext:pdf intext:"internal use only | confidential"

### ENDPOINTS

> site:example.com inurl:=
> site:example.com inurl:&
> site:example.com inurl:?id= | intext:?id=
