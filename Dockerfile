# Establecer la imagen base
FROM node:18.12

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración
COPY package.json package-lock.json /app/

# Instalar las dependencias
RUN npm ci

# Copiar el código fuente de la aplicación
COPY . /app

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4200

# Establecer las variables de entorno necesarias para Firebase
ENV FIREBASE_API_KEY="AIzaSyAtRZZLDHbKYTu3-j2nMjIN9hbKEbqn6jE"
ENV FIREBASE_AUTH_DOMAIN="ionic-2-c9ab3.firebaseapp.com"
ENV FIREBASE_PROJECT_ID="ionic-2-c9ab3"
ENV FIREBASE_STORAGE_BUCKET="ionic-2-c9ab3.appspot.com"
ENV FIREBASE_MESSAGING_SENDER_ID="690489122930"
ENV FIREBASE_APP_ID="1:690489122930:web:5b0413de03e5ea60b662eb"
# Ejecutar el comando para iniciar la aplicación
CMD ["npm", "start"]
