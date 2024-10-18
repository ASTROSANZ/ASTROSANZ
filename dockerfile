# Use a imagem do Node.js
FROM node:alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos do projeto
COPY . .

# Exponha a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
