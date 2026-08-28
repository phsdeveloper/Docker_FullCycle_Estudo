FROM golang:latest as builder
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

## Comandos utilizados nessa aula:
## ▶ docker build --no-cache -t phsdeveloper/docker-golang-example .
## ▶ docker run --name=goexemplo --rm -p 8080:8080  phsdeveloper/docker-golang-example
## ▶ docker run --name=goexemplo --rm  phsdeveloper/docker-golang-example
## ▶ docker images
## ▶ curl http://localhost:8080/
