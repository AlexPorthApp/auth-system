# Etapa de construcción
FROM node:18 AS build

# Directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto al contenedor
COPY package.json package-lock.json pnpm-lock.yaml ./

# Instalar dependencias
RUN npm install -g pnpm
RUN pnpm install

# Copiar el código fuente
COPY . .

# Compilar el proyecto
RUN pnpm build

# Etapa de ejecución
FROM node:18

# Directorio de trabajo
WORKDIR /src

# Copiar archivos compilados desde la etapa de construcción
COPY --from=build /src /src

# Exponer el puerto en el que corre el backend
EXPOSE 3001

# Comando para iniciar el backend
CMD ["pnpm", "start"]
