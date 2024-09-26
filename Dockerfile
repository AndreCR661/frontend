# Usa la imagen base oficial de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install && npm cache clean --force

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Usa la imagen base de nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos compilados de Vue.js al directorio de nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
