# 📘 Docker FullCycle Estudo

## 🐳 Docker na prática

- Dockerfile acumulado
```
FROM golang:latest as builder

LABEL maintainer="Paulo Santos" 
LABEL env="production"
#LABEL traefik.enable="true"


WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o server main.go
# O CMD pode ser sobrescrito no momento de executar o container 
#usando o docker run, mas o ENTRYPOINT não pode ser sobrescrito ele é fixo.
#CMD ["./server"] 
ENTRYPOINT [ "./server" ]
#CMD ["8081"]


# ## Final stage
# FROM scratch 
# COPY --from=builder /app/server /server
# EXPOSE 8080
# CMD ["./server"]

##scratch é uma imagem vazia, ou seja, não possui nenhum arquivo, nem mesmo o sistema operacional.

## Comandos uteis:
## ▶ docker build --no-cache -t phsdeveloper/docker-golang-example .
## ▶ docker run --name=goexemplo --rm -p 8080:8080  phsdeveloper/docker-golang-example
## ▶ docker run --name=goexemplo --rm  phsdeveloper/docker-golang-example
## ▶ docker images
## ▶ curl http://localhost:8080/
## ▶ docker ps --filter "label=env=production"

```

## 📦 Seção 05 – Imagens personalizadas com Dockerfile

> ### 🔹 Aula 05.11 — Labels na prática
> **Branch:** `01_DockerNaPratica_05-ImagensPersonalizadasComDockerfile_11-LabelsNaPrqtica`  
> **Início:** 28/06/2026 12:09
> **Fim:**  28/06/2026 13:10
- Dockerfile Aula:

```
FROM golang:latest as builder

LABEL maintainer="Paulo Santos" 
LABEL env="production"
LABEL version="1.0.0"
LABEL traefik.enable="true"

WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o server main.go
ENTRYPOINT [ "./server" ]
```

> ### 🔹 Aula 05.11 — Labels na prática
> **Branch:** `01_DockerNaPratica_05-ImagensPersonalizadasComDockerfile_12-ImagensBaseEFilhasComOnbuild`  
> **Início:** 28/06/2026 13:20
> **Fim:**  28/06/2026 