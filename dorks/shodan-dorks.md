# Shodan Dorks

A list of Shodan Dorks for Bug Bounty.

---
### Broad domain search

> ssl.cert.subject.CN:"example.com"

### Finds Apache server status pages

> http.title:"Apache Status" ssl.cert.subject.cn:"example.com"

### Finds Swagger UI interfaces hosted

> http.title:"Swagger UI — "hostname:"example.com"

### Finds Swagger UI interfaces using SSL certificates

> http.title:"Swagger UI — " ssl.cert.subject.cn:"example.com"

### Finds open directory listings

> http.title:"Directory Listing" hostname:"example.com"

### Finds open directory listings using SSL certificates

> http.title:"Directory Listing" ssl.cert.subject.cn:"example.com"

### Finds subdomains of example.com excluding Akamai, Ghost, Cloudflare, and Cloudfront hosts

> hostname:"example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"

### Finds SSL certificates

> ssl.cert.issuer.cn:"example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"

### Finds FTP servers with successful login

> "220" "230 Login successful." port:21 hostname:"*.example.com"

### Finds MongoDB servers without authentication

> "MongoDB Server Information" port:27017 "-authentication" ssl.cert.subject.cn:"example.com"

### Finds dashboard interfaces using

> http.title:"dashboard" ssl.cert.subject.cn:"example.com"

### Finds Citrix Gateway interfaces

> title:"citrix gateway" ssl.cert.subject.cn:"example.com"

### Finds OAuth endpoints with 302 redirects

> http.status:"302" oauth ssl.cert.subject.cn:"example.com"

### Finds Grafana interfaces

> http.title:"Grafana" ssl.cert.subject.cn:"example.com"

### Finds RabbitMQ interfaces

> http.title:"RabbitMQ" ssl.cert.subject.cn:"example.com"

### Finds Openfire Admin Console

> http.title:"Openfire Admin Console" ssl.cert.subject.cn:"example.com"

### Finds Samba servers

> "Authentication: disabled" port:445 product:"Samba" hostname:"example.com"

### Finds expired SSL certificates

> ssl.cert.expired:true hostname:"example.com"

### Finds SSL certificates with common names

> ssl.cert.subject.commonName:"example.com"

### Finds open directory indexes

> http.title:"Index of /" hostname:"example.com"

