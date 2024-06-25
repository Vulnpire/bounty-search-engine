# Shodan Dorks

A list of Shodan Dorks for Bug Bounty.

---
### Broad domain search

> ssl.cert.subject.CN:"example.com"
> http.title:"Apache Status" ssl.cert.subject.cn:"example.com"
> http.title:"Swagger UI — " hostname:"*.example.com"
> http.title:"Swagger UI — " ssl.cert.subject.cn:"example.com"
> http.title:"Directory Listing" hostname:"*.example.com"
> http.title:"Directory Listing" ssl.cert.subject.cn:"example.com"
> hostname:"*.example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"
> ssl.cert.issuer.cn:"example.com" "-AkamaiGHost" "-GHost" "-Cloudflare" "-Cloudfront"
> "220" "230 Login successful." port:21 hostname:"*.example.com"
> "MongoDB Server Information" port:27017 "-authentication" ssl.cert.subject.cn:"example.com"
> http.title:"dashboard" ssl.cert.subject.cn:"example.com"
> title:"citrix gateway" ssl.cert.subject.cn:"example.com"
> http.status:"302" oauth ssl.cert.subject.cn:"example.com"
> http.title:"Grafana" ssl.cert.subject.cn:"example.com"
> http.title:"RabbitMQ" ssl.cert.subject.cn:"example.com"
> http.title:"Openfire Admin Console" ssl.cert.subject.cn:"example.com"
> "Authentication: disabled" port:445 product:"Samba" hostname:"*.example.com"
> ssl.cert.issuer.cn:"example.com"
> ssl.cert.subject.cn:"example.com"
> ssl.cert.expired:true hostname:".example.com"
> ssl.cert.subject.commonName:".example.com"
> http.title:"Index of /" hostname:"*.example.com"
