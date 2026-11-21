FROM golang:latest as builder

LABEL maintainer="Paulo Santos" 
LABEL env="production"
LABEL version="1.0.0"
LABEL traefik.enable="true"

WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o server main.go
ENTRYPOINT [ "./server" ]


## Comandos uteis:
## ▶ docker build --no-cache -t phsdeveloper/docker-golang-example .
## ▶ docker run --name=goexemplo --rm -p 8080:8080  phsdeveloper/docker-golang-example
## ▶ docker run --name=goexemplo --rm  phsdeveloper/docker-golang-example
## ▶ docker images
## ▶ curl http://localhost:8080/
## ▶ docker ps --filter "label=env=production"
