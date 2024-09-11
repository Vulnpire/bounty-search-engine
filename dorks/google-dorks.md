# Google Dorks

A list of Google Dorks for Bug Bounty.

---
### INIT

> INIT

### PHP|ASP|ASPX|JSP|JSPX EXTENSION WITH PARAMETERS

> site:example.com (ext:php inurl:? | ext:aspx inurl:? | ext:asp inurl:? | ext:jsp inurl:? | ext:jspx inurl:?)

### FORM

> site:example.com (intitle:"Submit Feedback" | intitle:"Contact us" | intitle:"Join Our Waitlist" | intitle:"Subscribe" | intitle:"Newsletter" | intitle:"Unsubscribe" | intitle:"Email Support" | intitle:"Customer Support")

### LOGIN

> site:example.com (inurl:login | inurl:signin | intitle:Login | intitle:"sign in" | inurl:auth | inurl:/register)
> site:example.com (inurl:login | inurl:logon | inurl:sign-in | inurl:signin | inurl:portal)

### FILECATALYST FILE TRANSFER

> site:example.com intitle:"FileCatalyst file transfer solution"

### NEGATIVE SEARCH & SUBDOMAIN DISCOVERY

> site:example.com -www -shop -share -ir -mfa
> site:*.example.com
> site:*.*.example.com
> site:*.*.*.example.com

### XAMPP DEFAULT DASHBOARD PANELS

> site:example.com (intext:"Welcome to XAMPP for *" intitle:"Welcome to XAMPP" inurl:/dashboard)
> site:example.com (intext:apache + mariadb + php + perl intext:"welcome to xampp for *")
> site:example.com intitle:"welcome to xampp"

### CONFIG.YAML

> site:example.com ("configmap.yaml" | "config.yaml" | "*-config.yaml" intitle:"index of")

### SETTINGS.PHP

> site:example.com intitle:"index of" setting.php

### ADMIN

> site:example.com (inurl:admin | administrator | adm | login | l0gin | wp-login)
> intitle:"login" "admin" site:example.com
> intitle:"index of / admin" site:example.com
> inurl:admin (intitle:admin intext:admin site:example.com)

### FIREBASE

> "example.com" site:firebaseio.com

### CODE LEAKS

> site:pastebin.com "example.com"
> site:jsfiddle.net "example.com"
> site:codebeautify.org "example.com"
> site:codepen.io "example.com"

### FIND API ENDPOINTS

> site:example.com (inurl:/api/v1 | inurl:/api/v2 | inurl:/api/v3)
> inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:"example.com"

### SWAGGER-UI

> site:example.com intitle:"Swagger UI" | inurl:"index.html" | inurl:"swagger" | inurl:"restapi" | inurl:"classicapi" | inurl:"api" | inurl:"apidocs" | inurl:"clicktrack" | inurl:"doc" | inurl:"static" | inurl:"documentation" | inurl:"openapi" | inurl:"explore" | inurl:"v1" | inurl:"v2" | inurl:"v3" | inurl:"v4" | inurl:"developer" | inurl:"apidoc" | inurl:"document" | inurl:"govpay" | inurl:"routes" | inurl:"application" | inurl:"graphql" | inurl:"playground" | inurl:"apis" | inurl:"public" | inurl:"schema" | inurl:"spec" | inurl:"gateway"

### CLOUD STORAGE

> site:example.com ("s3 bucket" | "bucket-name" | "s3.amazonaws.com" | "s3-us-west-2.amazonaws.com" | "s3.amazonaws.com/bucket-name" | "s3.amazonaws.com/bucket/" | "s3.amazonaws.com/bucket?prefix=" | "s3.amazonaws.com/bucket-name/")
> "example.com" site:blob.core.windows.net
> "example.com" site:googleapis.com
> "example.com" site:drive.google.com
> "example.com" site:dev.azure.com
> "example.com" site:onedrive.live.com
> "example.com" site:digitaloceanspaces.com
> "example.com" site:sharepoint.com
> "example.com" site:s3-external-1.amazonaws.com
> "example.com" site:s3.dualstack.us-east-1.amazonaws.com
> "example.com" site:dropbox.com/s
> "example.com" site:box.com/s
> "example.com" site:docs.google.com inurl:"/d/"
> https://s3digger.com/#gsc.tab=0&gsc.q=example.com&gsc.sort=

### SQLI PRONE PARAMETERS

> site:example.com (inurl:?id= | /index.php?cat=)
> site:example.com (inurl:home.php?cat= | inurl:product_list.php?id=)
> site:example.com (inurl:product.php?product_id= | inurl:content.php?id=)
> site:example.com (inurl:view_items.php?id= | inurl:home.php?cat=)
> site:example.com (inurl:item_book.php?CAT= | inurl:www/index.php?page=)
> site:example.com (inurl:goods_detail.php?data= | inurl:storemanager/contents/item.php?page_code=)
> site:example.com (inurl:customer/board.htm?mode= | inurl:help/com_view.html?code=)
> site:example.com (inurl:n_replyboard.php?typeboard= | inurl:/library/lib.php?root=)
> site:example.com (inurl:article.php?id= | inurl:category.php?id=)
> site:example.com (inurl:thread.php?id= | inurl:view.php?id=)

### SQL ERRORS

> site:example.com intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"

### IDOR PRONE PARAMETERS & ENDPOINTS

> site:example.com (inurl:?invoice= | inurl:api/user/ | inurl:showImage )
> site:example.com (inurl:changepassword?user= | inurl:accessPage?menuitem= | inurl:user_id= | inurl:MyPictureList= | inurl:profile_id= | inurl:account_id= | inurl:order_id= | inurl:page_id= | inurl:product_id= | inurl:session_id= | inurl:invoice_id= | inurl:doc_id=)

### EXPOSED USER ACCOUNT PAGES (POSSIBLY IDOR)

> site:example.com (inurl:/account/ | inurl:/user/ intitle:"profile")

### OPEN REDIRECT PRONE PARAMETERS

> site:example.com (inurl:redir | inurl:url=http | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http | inurl:out=http | inurl:next=http | inurl:site=http | inurl:dest=http | inurl:destination=http | inurl:continue=http | inurl:forward=http | inurl:to=http | inurl:path=http | inurl:action=http | inurl:redirect_uri=http)

### XSS PRONE PARAMETERS

> site:example.com (inurl:login.sourcehost | inurl:name | inurl:query | inurl:search | inurl:keyword | inurl:username | inurl:email | inurl:message | inurl:comment | inurl:body | inurl:input | inurl:value | inurl:arg | inurl:data | inurl:q | inurl:search.aspx?keyword= | inurl:cat= | inurl:EmbedTest=)
> site:example.com (inurl:query filetype:html inurl:page | inurl:/poll/­default.asp?catid= | inurl:& inurl:search inurl:q | inurl:".php?cmd=" | inurl:".php?search=" | inurl:/­search_results.php?se­arch= | inurl:".php?file=")

### LFI PRONE PARAMETERS

> site:example.com (inurl:file= | inurl:page= | inurl:path= | inurl:doc= | inurl:folder= | inurl:dir= | inurl:showfile.php?filename=)

### RCE PRONE PARAMETERS

> site:example.com (inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping=)

### PASSWORD RESET PAGES

> site:example.com (inurl:password-reset | inurl:forgot | inurl:reset-password)

### COMMON PARAMS FOR SESSION MANAGEMENT

> site:example.com (inurl:token | inurl:auth | inurl:session | inurl:sid | inurl:csrf | inurl:xsrf)

### UPLOAD PRONE ENDPOINTS

> site:example.com (intitle:"choose file" | intitle:"file upload")
> site:example.com (inurl:"upload.php" | inurl:"upload" intitle:"index of")
> site:example.com "upload your file" inurl:upload
> site:example.com inurl:/uploads/ filetype:php
> site:example.com "file upload" "instructions" inurl:upload
> site:example.com inurl:admin intitle:"file upload"

### INDEX

> site:example.com intext:"index of" "parent directory"

### PEOPLESOFT

> site:example.com intitle:"Oracle+PeopleSoft+Sign-in"

### IIS

> site:example.com intitle:"IIS Windows Server"

### PHPMYADMIN

> site:example.com (inurl:"setup/index.php" | inurl:"phpmyadmin" | inurl:"phpMyAdmin" | inurl:"admin/phpMyAdmin" | inurl:"pma/setup/index.php" | intitle:"index of /phpMyAdmin")
> site:example.com ext:php intitle:phpinfo "published by the PHP Group"

### GIT

> site:example.com ("index of /.git" | intext:"index of /.git" "parent directory")

### GEOSERVER

> site:example.com inurl:/geoserver/web/

### GRAFANA

> site:example.com intitle:"Grafana"
> site:example.com intitle:"Grafana" inurl:"/dashboard/db"

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
> site:example.com intitle:"Jenkins Script Console" intext:"Run groovy script"
> site:example.com intitle:"Console Output" intext:"Finished: SUCCESS"

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

> site:example.com (filetype:doc | filetype:xlsx) intext:@gmail.com

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
> site:example.com (ext:doc | ext:docx)
> site:example.com (ext:xls | ext:xlsx)
> site:example.com ext:csv
> site:example.com (ext:ppt | ext:pptx)
> site:example.com ext:txt

### INTERESTING EXTENSIONS

> site:example.com (ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess)

### SENSITIVE INFORMATION

> site:example.com (ext:doc | ext:docx intext:"internal use only | confidential")
> site:example.com (ext:pdf intext:"internal use only | confidential")
> site:example.com ext:pdf intitle:Setup
> site:example.com (intitle:"Index of" .bash_history | intitle:"Index of" .mysql_history)
> site:example.com allintext:username filetype:log
> site:example.com filetype:txt intext:@gmail.com intext:password
> site:example.com (intext:"MongoDB Server Information" intitle:"MongoDB" -intext:"MongoDB Server Version")
> site:example.com "https://drive.google.com/file/d/"
> site:groups.google.com "example.com"
> site:example.com filetype:env "DB_PASSWORD"
> site:example.com filetype:xls inurl:email.xls
> site:example.com ("MYSQL_ROOT_PASSWORD:" ext:env | ext:yml -git)
> site:example.com (intext:"docs.google.com" "spreadsheets" | "presentation" | "document")
> site:example.com inurl:zoom.us/j AND intext:scheduled for
> site:example.com intitle:Test Page for the Nginx HTTP Server on Fedora
> site:example.com intitle:"Swagger UI - " + "Show/Hide"
> site:example.com filetype:php inurl:"/config/"
> site:example.com filetype:js inurl:"/wp-content/"
> site:example.com filetype:json inurl:"/api/"
> site:example.com intitle:"index of" "backup" OR "config" filetype:bak
> site:example.com filetype:php inurl:"/admin/" intext:"password"
> site:example.com filetype:json intext:"api_key" OR intext:"access_token"
> site:example.com filetype:pdf intext:"SSN" OR intext:"Social Security"

### EXPOSED TECHNICAL DOCS

> site:example.com filetype:pdf intext:"penetration test" OR intext:"pentest report"
> site:example.com filetype:pdf intext:"vulnerability assessment" OR intext:"security audit"
> site:example.com filetype:pdf intext:"compliance report"
> site:example.com filetype:pdf intext:"database schema" OR intext:"table structure"
> site:example.com filetype:pdf inurl:"/reports/" intext:"Created by" OR intext:"Author"
> site:example.com filetype:pdf intext:"change log" OR intext:"revision history"
> site:example.com filetype:pdf intext:"financial statement" OR intext:"balance sheet"
> site:example.com filetype:pdf intext:"settlement agreement" OR intext:"contract"
> site:example.com filetype:pdf intext:"audit report" OR intext:"accounting"
> site:example.com filetype:pdf intext:"employee records" OR intext:"performance review"
> site:example.com filetype:pdf intext:"network architecture" OR intext:"system diagram"
> site:example.com filetype:pdf intext:"IP address" OR intext:"server configuration"
> site:example.com filetype:pdf intext:"<script>" OR intext:"JavaScript"
> site:example.com filetype:pdf intext:"obsolete" OR intext:"archived" OR intext:"deprecated"
> site:example.com filetype:pdf intext:"not for public release" OR intext:"outdated"

### NVIDIA JETSON DEVICES

> site:example.com intitle:"NVIDIA Jetson" intext:"NVIDIA Jetson"

### SERVER ERRORS

> inurl:"error" | intitle:"exception" | intitle:"failure" | intitle:"server at" | inurl:exception | "database error" | "SQL syntax" | "undefined index" | "unhandled exception" | "stack trace" site:example.com

### ADOBE EXPERIENCE MANAGER

> inurl:/content/usergenerated | inurl:/content/dam | inurl:/jcr:content | inurl:/libs/granite | inurl:/etc/clientlibs | inurl:/content/geometrixx | inurl:/bin/wcm | inurl:/crx/de site:example.com

### MONGODB INSTANCES WITH AUTH BYPASS

> site:example.com intext:"MongoDB Server Information" intitle:"MongoDB" -intext:"MongoDB Server Version"

### OPENCV INSTANCES

> site:example.com intitle:"OpenCV Server" inurl:"/cgi-bin/guestimage.html"

### OPENEMR INSTALLATIONS

> site:example.com intitle:"OpenEMR Login" inurl:"/interface"

### SEARCH PASTEBIN/PASTING SITES

> site:pastebin.com | site:paste2.org | site:pastehtml.com | site:slexy.org | site:snipplr.com | site:snipt.net | site:textsnip.com | site:bitpaste.app | site:justpaste.it | site:heypasteit.com | site:hastebin.com | site:dpaste.org | site:dpaste.com | site:codepad.org | site:jsitor.com | site:codepen.io | site:jsfiddle.net | site:dotnetfiddle.net | site:phpfiddle.org | site:ide.geeksforgeeks.org | site:repl.it | site:ideone.com | site:paste.debian.net | site:paste.org | site:paste.org.ru | site:codebeautify.org  | site:codeshare.io | site:trello.com "example.com"

### SENSITIVE FILES

> site:example.com (inurl:admin | inurl:dashboard | inurl:panel | inurl:phpmyadmin | inurl:wp-admin | inurl:confluence | inurl:secureadmin | inurl:sitemanager | inurl:drupal | inurl:config | inurl:myadmin | inurl:sqladmin | inurl:grafana | inurl:kibana | inurl:metrics | inurl:backup | inurl:zabbix | inurl:prometheus | inurl:splunk | inurl:database | inurl:phppgadmin | inurl:ghost | inurl:joomla)

### WAYBACK MACHINE

> https://web.archive.org/web/*/example.com/*
> https://web.archive.org/cdx/search/cdx?collapse=urlkey&url=*.example.com

### IP ADDRESSES

> (example.com) (site:*.*.29.* |site:*.*.28.* |site:*.*.27.* |site:*.*.26.* |site:*.*.25.* |site:*.*.24.* |site:*.*.23.* |site:*.*.22.* |site:*.*.21.* |site:*.*.20.* |site:*.*.19.* |site:*.*.18.* |site:*.*.17.* |site:*.*.16.* |site:*.*.15.* |site:*.*.14.* |site:*.*.13.* |site:*.*.12.* |site:*.*.11.* |site:*.*.10.* |site:*.*.9.* |site:*.*.8.* |site:*.*.7.* |site:*.*.6.* |site:*.*.5.* |site:*.*.4.* |site:*.*.3.* |site:*.*.2.* |site:*.*.1.* |site:*.*.0.*)
