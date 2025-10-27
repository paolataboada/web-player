# Fase de construcción
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json ./

# Usa Yarn para instalar dependencias
RUN npm install

COPY . .

# Usa npm para ejecutar el script de construcción
RUN npm run build

# Fase de producción
FROM nginx:alpine

# Copia la configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos de la fase de construcción
COPY --from=build /app/dist /usr/share/nginx/html                                                                                                     

EXPOSE 80
