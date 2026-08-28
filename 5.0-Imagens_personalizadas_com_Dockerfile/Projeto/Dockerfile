ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION} 
# FROM node:${NODE_VERSION}-alpine
# FROM node:${NODE_VERSION}-slim

RUN apt-get update \
    && apt-get install -y vim \
    && rm -rf /var/lib/apt/lists/*


ENV PORT=3001
ENV MESSAGE="Mensagem Alterada via ENV"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
#-------------------------------
# Mudou o comando para adicionar o usuário para essa seção, pois ao copiar alguns arquivos 
# não tinha permissão, e para isso seria necesario acessar com o usuario root para copiar os arquivos
#-----------------------------
# RUN useradd -m appuser #Retirado para que possamos acessar o container como root
# USER appuser
# USER 1001
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
    #CMD ["curl", "-f", "http://localhost:3001"] || exit 1
    #CMD curl -f http://localhost:3001 || exit 1
    CMD ["sh", "-c", "curl -f http://localhost:3001 || exit 1"]
VOLUME ["/data"]
EXPOSE 3001
CMD ["node", "index.js"]

#-------------------------------
# Principais comandos utilizados:
# docker run --rm --name appnode -p 3001:3001 -e MESSAGE="Minha mensagem" phsdeveloper/docker-node-example:latest
# docker build -t phsdeveloper/docker-node-example:latest . 
# docker exec -it appnode bash

