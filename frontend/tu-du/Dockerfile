# Usa a imagem oficial do Node.js como base
FROM node:latest

# Define o diretório de trabalho da aplicação dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para dentro do container
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install


# Copia todo o conteúdo do diretório da aplicação para dentro do container
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Define o comando de inicialização da aplicação
CMD ["npm", "run", "dev"]
