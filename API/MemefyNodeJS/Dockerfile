# qual imagem vai ser utilizada, depois da : é a tag
# caso uma distro linux não seja definida, o padrão é a alpine
FROM node:18.16.0

# a pasta que vai ser criada no container
WORKDIR /app

# copia tudo que começa com package e termina em .json para a pasta WORKDIR criada (app)
COPY package*.json ./

# dentro da WORKDIR executa npm install para gerar os node_modules
RUN npm install

# recorta todos os arquivos da raiz onde o Dockerfile se encontra e cola no WORKDIR
# (.dockerignore serve para ignorar arquivos, no caso node_modules)
# não precisa copiar o node_modules para a WORKDIR porque lá já tem essa pasta (RUN npm install)
COPY . .

# seta uma váriavel de ambiente PORT para ser acessível no index.ts (process.env.PORT)
ENV PORT=5555

# expõe a porta que o container vai rodar
EXPOSE 5555

# APENAS UM *CMD* POR ARQUIVO
# é responsável por fazer o boot da aplicação
CMD [ "npm", "run", "dev" ]