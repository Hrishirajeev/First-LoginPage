# Trendo - Login Page
## Live Demo
 https://first-login-page-ashy.vercel.app/

Test login: `test@trendo.com` / `123456`
A simple full stack login page built with React (frontend) and Node.js + Express (backend).

## Features

- Responsive login page with a modern dark gradient design
- Frontend validation (empty fields, invalid email, password length)
- Login request sent to the backend using Axios (POST)
- Backend checks the credentials with mock data (no database)
- Error and success messages shown on the same page
- On success, the user goes to a dummy Dashboard

## Tech Used

- **Frontend:** React (Vite), React Router, Axios, plain CSS
- **Backend:** Node.js, Express, CORS

## How to Run

**Backend**

```bash
cd Backend
npm install
npm run dev
```

Runs on `http://localhost:5000`

**Frontend** (open a new terminal)

```bash
cd Frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`

## Test Login

- Email: `test@zenvo.com`
- Password: `123456`

## API

`POST /api/login`

Body:

```json
{ "email": "test@zenvo.com", "password": "123456" }
```

Returns `true` for valid credentials, `false` otherwise.

## Folder Structure

```
Integrated-LoginPage/
├── Backend/    (Express server)
└── Frontend/   (React app)

