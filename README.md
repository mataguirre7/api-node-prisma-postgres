# API Node + Prisma + SQLite

CRUD completo utilizando **Node.js**, **Express**, **Prisma ORM** y **SQLite** como base de datos.

🔗 [Ver en Render](https://api-node-prisma-sqlite.onrender.com/api)

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Render](https://render.com/) para el deploy

---

## 📦 Instalación y uso

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/api-node-prisma-sqlite.git
   cd api-node-prisma-sqlite
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Ejecutá las migraciones de Prisma y levantá el servidor:
   ```bash
   npm run dev
   ```

> Este comando corre `npx prisma migrate dev` y luego inicia el servidor con `npm start`.

---

## 🔄 Scripts disponibles

```json
"scripts": {
  "dev": "npx prisma migrate dev && npm start",
  "start": "nodemon ."
}
```

---

## 🗂️ Estructura del proyecto

```
.
├── src/
│   └── app.js             # Punto de entrada del servidor
├── prisma/
│   └── schema.prisma      # Definición del modelo de datos
|   └── dev.db             # Archivo SQLite generado (no subir al repo)
├── node_modules/
├── package.json
```

---

## 🛠️ Endpoints disponibles

(Dependen de tu implementación exacta, ejemplo genérico)

- `GET /api/users` – Obtener todos los usuarios
- `GET /api/users/:id` – Obtener un usuario por ID
- `POST /api/users` – Crear un nuevo usuario
- `PUT /api/users/:id` – Actualizar un usuario existente
- `DELETE /api/users/:id` – Eliminar un usuario
- 
- `GET /api/course` – Obtener todos los cursos
- `GET /api/course/:id` – Obtener un curso por ID
- `POST /api/course` – Crear un nuevo curso
- `PUT /api/course/:id` – Actualizar un curso existente
- `DELETE /api/course/:id` – Eliminar un curso
-
- `GET /api/entrollment` – Obtener todas las inscripciones
- `GET /api/entrollment/:userId/:courseId` – Obtener una inscripción por ID de usuario y ID del curso
- `POST /api/entrollment` – Crear una nueva inscripción
- `DELETE /api/entrollment/:userId/:courseId` – Eliminar una inscripción

---

## ⚠️ Notas

- La base de datos se guarda en un archivo local (`dev.db`). Render no garantiza persistencia de archivos entre deploys. Usar solo para pruebas o proyectos personales.
- Asegurate de ignorar el archivo `.env` y `database.db` en tu `.gitignore`.

---

## 🧑‍💻 Autor

Desarrollado por [Matías Aguirre](https://github.com/mataguirre7)

---

## 📄 Licencia

MIT
