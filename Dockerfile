# Establece la imagen base
FROM node:18.12

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto a la imagen del contenedor
COPY . .

# Instala las dependencias de tu proyecto
RUN npm install -g @ionic/cli
RUN npm install

# Compila tu proyecto de Ionic
RUN ionic build

# Expone el puerto en el que tu aplicación de Ionic se ejecuta internamente
EXPOSE 8100

# Define el comando por defecto para ejecutar tu aplicación de Ionic
CMD [ "ionic", "serve", "--host", "0.0.0.0" ]
