# Shodan Dorks

A list of Shodan Dorks for Bug Bounty.

---
### Broad domain search

> ssl.cert.subject.CN:"example.com"

## Finds Apache server status pages for example.com
> http.title:"Apache Status" ssl.cert.subject.cn:"example.com"

## Finds Swagger UI interfaces hosted under example.com
> http.title:"Swagger UI — " hostname:"*.example.com"

## Finds Swagger UI interfaces using SSL certificates for example.com
> http.title:"Swagger UI — " ssl.cert.subject.cn:"example.com"

## Finds open directory listings hosted under example.com
> http.title:"Directory Listing" hostname:"*.example.com"

## Finds open directory listings using SSL certificates for example.com
> http.title:"Directory Listing" ssl.cert.subject.cn:"example.com"

## Finds subdomains of example.com excluding Akamai, Ghost, Cloudflare, and Cloudfront hosts
> hostname:"*.example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"

## Finds SSL certificates issued by example.com excluding Akamai, Ghost, Cloudflare, and Cloudfront hosts
> ssl.cert.issuer.cn:"example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"

## Finds FTP servers with successful login messages hosted under example.com
> "220" "230 Login successful." port:21 hostname:"*.example.com"

## Finds MongoDB servers without authentication using SSL certificates for example.com
> "MongoDB Server Information" port:27017 "-authentication" ssl.cert.subject.cn:"example.com"

## Finds dashboard interfaces using SSL certificates for example.com
> http.title:"dashboard" ssl.cert.subject.cn:"example.com"

## Finds Citrix Gateway interfaces using SSL certificates for example.com
> title:"citrix gateway" ssl.cert.subject.cn:"example.com"

## Finds OAuth endpoints with 302 redirects using SSL certificates for example.com
> http.status:"302" oauth ssl.cert.subject.cn:"example.com"

## Finds Grafana interfaces using SSL certificates for example.com
> http.title:"Grafana" ssl.cert.subject.cn:"example.com"

## Finds RabbitMQ interfaces using SSL certificates for example.com
> http.title:"RabbitMQ" ssl.cert.subject.cn:"example.com"

## Finds Openfire Admin Console interfaces using SSL certificates for example.com
> http.title:"Openfire Admin Console" ssl.cert.subject.cn:"example.com"

## Finds Samba servers with disabled authentication hosted under example.com
> "Authentication: disabled" port:445 product:"Samba" hostname:"*.example.com"

## Finds SSL certificates issued by example.com
> ssl.cert.issuer.cn:"example.com"

## Finds SSL certificates for example.com
> ssl.cert.subject.cn:"example.com"

## Finds expired SSL certificates for example.com
> ssl.cert.expired:true hostname:".example.com"

## Finds SSL certificates with common names for example.com
> ssl.cert.subject.commonName:".example.com"

## Finds open directory indexes hosted under example.com
> http.title:"Index of /" hostname:"*.example.com"

