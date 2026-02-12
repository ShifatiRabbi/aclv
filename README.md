# Advanced Chemical Lab Visualization

MERN monorepo project (MongoDB, Express, React, Node.js)  
Frontend: React + Vite + Tailwind CSS + Bootstrap  
Backend: Node.js + Express + MongoDB

---

## Requirements

- Node.js >= 18
- npm >= 9
- MongoDB running locally or cloud

---

## Clone Project

```bash
git clone <REPO_URL>
cd advanced-chemical-lab-visualization
```

---

## Backend Setup (API)

```bash
cd apps/dev
npm install
npm run dev
```

Backend runs at:
```
http://localhost:5000
```

Health check:
```
http://localhost:5000/api/health
```

---

## Frontend Setup (Web)

Open a new terminal:

```bash
cd apps/web
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## Environment Variables

Create file:

```
apps/dev/.env
```

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/aclb
```

---

## Project Structure

```
apps/
├── dev   # Backend (Node + Express)
└── web   # Frontend (React + Vite)
```

---

## Notes

- Frontend is already connected to backend (`http://localhost:5000/api`)
- Tailwind CSS + Bootstrap are preconfigured
- File uploads stored in `apps/api/uploads`
- Do NOT store files in database

---

## Stop Project

Press:
```
CTRL + C
```

---

## Done

Open browser:
```
http://localhost:5173
```
