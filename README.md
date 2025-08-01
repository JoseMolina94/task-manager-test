# Task Manager

Una aplicación completa de gestión de tareas con colores personalizables, construida con tecnologías modernas y una arquitectura full-stack.

## Características

- **Gestión de tareas**: Crear, ver y organizar tareas
- **Colores personalizables**: 8 colores suaves para categorizar tareas
- **Interfaz moderna**: Diseño responsive con Tailwind CSS
- **Expansión de tarjetas**: Ver descripciones con animaciones suaves
- **Modal interactivo**: Formulario de creación en modal
- **API documentada**: Swagger/OpenAPI para documentación completa
- **Base de datos persistente**: MySQL con Docker

## Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **SWR** - Biblioteca para data fetching
- **Docker** - Containerización

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **TypeScript** - Tipado estático
- **MySQL2** - Driver de base de datos
- **Swagger/OpenAPI** - Documentación de API
- **Docker** - Containerización

### Base de Datos
- **MySQL** - Sistema de gestión de base de datos
- **Docker Compose** - Orquestación de contenedores

## Prerrequisitos

- **Node.js** (versión 18 o superior)
- **Docker Desktop** (debe estar encendido)
- **npm** o **yarn**

## Instalación

### 1. Clonar el repositorio
```bash
git clone git@github.com:JoseMolina94/task-manager-test.git
cd task-manager-test
```

### 2. Configurar la base de datos
En la carpeta raíz del proyecto, ejecuta:
```bash
docker compose up -d
```
Esto iniciará MySQL en un contenedor Docker.

### 3. Instalar dependencias del backend
Desde la carpeta raíz del proyecto.
```bash
cd backend
npm install
```

### 4. Instalar dependencias del frontend
Desde la carpeta raíz del proyecto.
```bash
cd frontend
npm install
```

### 5. Configurar variables de entorno
Crea un archivo `.env` (en caso de no existir) en la carpeta `backend`:
```env
PORT=4000
DB_HOST=localhost
DB_USER=taskuser
DB_PASSWORD=taskpass
DB_NAME=taskdb
```
Crea un archivo `.env` (en caso de no existir) en la carpeta `frontend`:
```env
NEXT_PUBLIC_BACKEND_URL = 'http://localhost:4000'
```

## Ejecutar la aplicación

### 1. Iniciar el backend
```bash
cd backend
npm run dev
```
El servidor estará disponible en: `http://localhost:4000`
Documentación Swagger: `http://localhost:4000/api-docs`

### 2. Iniciar el frontend
```bash
cd frontend
npm run dev
```
La aplicación estará disponible en: `http://localhost:3000`

## Comandos Docker

### Iniciar servicios
```bash
docker compose up -d
```

### Detener servicios
```bash
docker compose down
```

### Detener servicios y eliminar volúmenes
```bash
docker compose down -v
```

### Ver logs
```bash
docker compose logs
```

## Estructura del Proyecto

```
task-manager-test/
├── backend/                 # Servidor Express.js
│   ├── src/
│   │   ├── controllers/     # Controladores de la API
│   │   ├── routes/          # Rutas de la API
│   │   ├── swagger.ts       # Configuración de Swagger
│   │   └── index.ts         # Punto de entrada del servidor
│   └── package.json
├── frontend/                # Aplicación Next.js
│   ├── src/
│   │   ├── app/            # Páginas y rutas
│   │   ├── components/     # Componentes React
│   │   └── types/          # Definiciones de TypeScript
│   └── package.json
├── mysql/                   # Scripts de base de datos
│   └── init.sql
├── docker-compose.yml       # Configuración de Docker
└── README.md
```

## API Endpoints

### Documentación completa
- **Swagger UI**: `http://localhost:4000/api-docs`

### Endpoints principales
- `GET /tasks` - Obtener todas las tareas
- `POST /task` - Crear una nueva tarea
- `GET /health` - Verificar estado del servidor

## Características de la UI

- **Modal de creación**: Formulario elegante para crear tareas
- **Selector de colores**: 8 colores suaves predefinidos
- **Tarjetas expandibles**: Click para ver descripciones completas
- **Animaciones suaves**: Transiciones fluidas en toda la aplicación
- **Diseño responsive**: Funciona en desktop y móvil

## Solución de Problemas

### Error de conexión a la base de datos
1. Verifica que Docker Desktop esté encendido
2. Ejecuta `docker compose up -d` en la carpeta raíz
3. Verifica que el puerto 3306 esté disponible

### Error de dependencias
1. Elimina `node_modules` y `package-lock.json`
2. Ejecuta `npm install` nuevamente

### Error de puertos
1. Verifica que los puertos 3000 y 4000 estén libres
2. Cambia los puertos en los archivos de configuración si es necesario

## 📝 Scripts Disponibles

### Backend
```bash
npm run dev    # Desarrollo con hot reload
npm run build  # Compilar para producción
npm start      # Ejecutar en producción
```

### Frontend
```bash
npm run dev    # Desarrollo con hot reload
npm run build  # Compilar para producción
npm start      # Ejecutar en producción
npm run lint   # Verificación del código
```

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

**Jose Molina**
