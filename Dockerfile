FROM node:9.3.0

# Creamos el directorio app
WORKDIR /usr/src/app

# Instalamos las dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Bundle del código de la app
COPY . .

RUN npm run build

EXPOSE 9000
CMD [ "node", "dist/index.js" ]

# Luego, creamos a imagen: docker build -t jmanuelrosa/openwebinars .
# Luego: docker run -p 49160:9000 -d jmanuelrosa/openwebinars
# Luego: docker ps
# Luego: docker logs <container_id>
# Luego: Hacer una peticion a http://localhost/music
