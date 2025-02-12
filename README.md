# Sistema de Registro y Login

Este es el backend del sistema de registro y login utilizando **Node.js**, **Express**, **Prisma** y **PostgreSQL**.

### 1. **Backend**

## Requisitos previos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/) (>= v16.0.0)
- [PostgreSQL](https://www.postgresql.org/) (para la base de datos)
- [pnpm](https://pnpm.io/) (gestor de dependencias)

## Instalación


1. Clona el repositorio:

```bash
  git clone https://github.com/AlexPorthApp/auth-system.git
  cd auth-system/backend
```

2. Instala las dependencias:

```bash
  pnpm install
```

3. Configura la base de datos:
  Asegúrate de tener PostgreSQL en funcionamiento y crea una base de datos para el proyecto, por ejemplo, auth_system.

  Configura las credenciales en el archivo .env:

```bash
  DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/<db-name>?schema=public"
```

4. Realiza las migraciones para crear las tablas necesarias en la base de datos:

```bash
  npx prisma migrate dev --name init
```

5. Inicia el servidor:

```bash
  pnpm run dev
```

El backend estará corriendo en http://localhost:3001.


### 2. **Frontend**

# Frontend: Sistema de Registro y Login

Este es el frontend del sistema de registro y login utilizando **Next.js** con **React**.

## Requisitos previos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/) (>= v16.0.0)
- [pnpm](https://pnpm.io/) (gestor de dependencias)

## Instalación

1. Clona el repositorio:

```bash
  git clone https://github.com/AlexPorthApp/auth-system.git
  cd auth-system/frontend
```
2. Instala las dependencias:

```bash
  pnpm install
```
3. Inicia el servidor:

```bash
  pnpm run dev
```
El frontend estará corriendo en http://localhost:3000.


## Para correr el proyecto usando docker

1. ejecutar el siguiente comando en las carpetas de `backend` y `frontend`

```bash
  docker-compose up --build
```
El backend estará disponible en http://localhost:3001

El frontend estará disponible en http://localhost:3000
