## Task Manager

A full-stack task management app with a **React (Vite)** frontend and an **Express + MongoDB (Mongoose)** backend.

### Live links

- **Frontend (Vercel)**: `https://task-manager-alpha-blond-96.vercel.app/`
- **Backend (Render)**: `https://task-manager-l2i3.onrender.com/api`

### Features

- **CRUD tasks**: create, view, update, delete tasks
- **Statuses**: `Pending`, `In Progress`, `Completed`
- **Color-coded tasks**
- **Task stats**: total / completed / in-progress / pending

### Tech stack

- **Frontend**: React, Vite, React Router, Axios, CSS
- **Backend**: Node.js, Express, Mongoose, CORS, dotenv
- **Database**: MongoDB

### Project structure

```text
Task-Manager/
  backend/
    src/server.js
    routes/taskRoutes.js
    controllers/TaskController.js
    models/TaskModel.js
  frontend/
    src/axios.js
    src/components/
```

### Getting started (local)

#### Clone the repository

```bash
git clone https://github.com/Singhanurag45/Task-Manager.git
cd Task-Manager
```

#### Prerequisites

- **Node.js**: 18+ recommended
- **MongoDB**: local MongoDB OR a MongoDB Atlas connection string

#### 1) Backend setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/TaskManager
```

Start the backend:

```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

#### 2) Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

#### API base URL used by the frontend

Frontend axios instance is configured in `frontend/src/axios.js`:

- **Development**: `http://localhost:5000/api`
- **Production**: `https://task-manager-l2i3.onrender.com/api`

If you change your backend port or URL, update `frontend/src/axios.js` accordingly.

### Run with Docker (MongoDB Atlas)

1) Put your Atlas connection string in `backend/.env` (used by `docker-compose` via `env_file`):

```bash
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

2) Optional — override the API URL baked into the frontend build (defaults to `http://localhost:5000/api`). Add to a **root** `.env` next to `docker-compose.yml` when deploying the stack somewhere else:

```bash
VITE_API_BASE_URL=https://your-public-backend.example.com/api
```

3) Start:

```bash
docker compose up --build
```

4) Open:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000/api/tasks`

### Backend API

Base path: `/api/tasks`

- **GET** `/api/tasks` — list all tasks
- **POST** `/api/tasks` — create a task
- **GET** `/api/tasks/:id` — get a task by id
- **PUT** `/api/tasks/:id` — update a task by id
- **DELETE** `/api/tasks/:id` — delete a task by id
- **GET** `/api/tasks/stats` — task stats summary

#### Task schema (MongoDB)

The backend stores tasks with these fields (see `backend/models/TaskModel.js`):

- **title**: string
- **description**: string
- **author**: string
- **status**: string
- **color**: string (hex)
- **startDate**: string
- **endDate**: string

### Notes

- **CORS**: Allowed origins are configured in `backend/src/server.js` (local Vite + the deployed Vercel domain). If you deploy the frontend to a new URL, add it there.
- **Security**: Never commit `backend/.env` to git. If a real MongoDB URI/password was ever committed, rotate it immediately.

### Contributing

- Fork the repo
- Create a branch: `git checkout -b feature/your-feature`
- Commit: `git commit -m "Describe your change"`
- Push and open a PR

### Contact

Created by **[Singhanurag45](https://github.com/Singhanurag45)**  
LinkedIn: `https://www.linkedin.com/in/anurag-singh-9598b4207/`
