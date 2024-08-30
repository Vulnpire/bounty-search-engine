# Shodan Dorks

A list of Shodan Dorks for Bug Bounty.

---
### BROAD DOMAIN SEARCH

> ssl.cert.subject.CN:"example.com"

### FINDS APACHE SERVER STATUS PAGES

> http.title:"Apache Status" ssl.cert.subject.cn:"example.com"

### FINDS SWAGGER UI INTERFACES HOSTED

> http.title:"Swagger UI — "hostname:"example.com"

### FINDS SWAGGER UI INTERFACES USING SSL CERTIFICATES

> http.title:"Swagger UI — " ssl.cert.subject.cn:"example.com"

### FINDS OPEN DIRECTORY LISTINGS

> http.title:"Directory Listing" hostname:"example.com"

### FINDS OPEN DIRECTORY LISTINGS USING SSL CERTIFICATES

> http.title:"Directory Listing" ssl.cert.subject.cn:"example.com"

### FINDS SUBDOMAINS OF EXAMPLE.COM EXCLUDING AKAMAI, GHOST, CLOUDFLARE, AND CLOUDFRONT HOSTS

> hostname:"example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"

### FINDS SSL CERTIFICATES

> ssl.cert.issuer.cn:"example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"

### FINDS FTP SERVERS WITH SUCCESSFUL LOGIN

> "220" "230 Login successful." port:21 hostname:"*.example.com"

### FINDS MONGODB SERVERS WITHOUT AUTHENTICATION

> "MongoDB Server Information" port:27017 "-authentication" ssl.cert.subject.cn:"example.com"

### FINDS DASHBOARD INTERFACES

> http.title:"dashboard" ssl.cert.subject.cn:"example.com"

### FINDS CITRIX GATEWAY INTERFACES

> title:"citrix gateway" ssl.cert.subject.cn:"example.com"

### FINDS OAUTH ENDPOINTS WITH 302 REDIRECTS

> http.status:"302" oauth ssl.cert.subject.cn:"example.com"

### FINDS GRAFANA INTERFACES

> http.title:"Grafana" ssl.cert.subject.cn:"example.com"

### FINDS RABBITMQ INTERFACES

> http.title:"RabbitMQ" ssl.cert.subject.cn:"example.com"

### FINDS OPENFIRE ADMIN CONSOLE

> http.title:"Openfire Admin Console" ssl.cert.subject.cn:"example.com"

### FINDS SAMBA SERVERS

> "Authentication: disabled" port:445 product:"Samba" hostname:"example.com"

### FINDS EXPIRED SSL CERTIFICATES

> ssl.cert.expired:true hostname:"example.com"

### FINDS SSL CERTIFICATES WITH COMMON NAMES

> ssl.cert.subject.commonName:"example.com"

### FINDS OPEN DIRECTORY INDEXES

> http.title:"Index of /" hostname:"example.com"

### FINDS WEBSOCKETS SERVERS

> "HTTP/1.1 101 Switching Protocols" "Upgrade: websocket" hostname:"example.com"

### FINDS HTTP BASIC AUTHENTICATION PROMPTS

> "HTTP/1.1 401 Unauthorized" "WWW-Authenticate: Basic" hostname:"example.com"

### FINDS EXPOSED KIBANA INSTANCES

> "kbn-version" hostname:"example.com"

### FINDS ELASTICSEARCH INSTANCES

> "root.typename" "cluster_name" "elasticsearch" hostname:"example.com"

### FINDS REDIS INSTANCES

> "redis-server" "Server:" port:6379 hostname:"example.com"

### FINDS PUPPET ENTERPRISE CONSOLES

> "Puppet Enterprise Console" port:443 ssl.cert.subject.cn:"example.com"

### FINDS OPEN WEBDAV INTERFACES

> "PROPFIND /" "port:80" hostname:"example.com"

### FINDS PUBLIC JENKINS INSTANCES

> "X-Jenkins-Session" port:8080 hostname:"example.com"
