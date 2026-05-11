# 🌍 Countries Explorer

A full-stack web application to explore country details with secure user authentication.

🔗 **Live Demo:** [your-app.vercel.app](https://your-app.vercel.app)  
🔗 **Backend API:** [your-app.railway.app](https://your-app.railway.app)

---

## 📸 Screenshots

> Login Page | Protected Dashboard | Country Search Results

---

## ✨ Features

- 🔐 User Registration & Login with JWT Authentication
- 🔒 Password hashing with bcrypt
- 🛡️ Protected routes — dashboard only accessible after login
- 🌐 Search any country and view capital, population, currency, and flag
- 💾 Persistent login — stays logged in on page refresh
- 🚪 Logout clears session securely
- ☁️ Cloud PostgreSQL database (Neon)
- 🚀 Deployed frontend (Vercel) + backend (Railway)

---

## 🏗️ Architecture

```
React Frontend (Vercel)
       ↓
   Vite Proxy
       ↓
Express Backend (Railway)
   ↓         ↓
Neon DB    RestCountries API
(users)    (country data)
```

### Three Layer Design:
- **Frontend** — React + Vite (Login, Dashboard, Country Search)
- **Backend** — Node.js + Express (REST API, JWT Auth, Middleware)
- **Database** — PostgreSQL on Neon Cloud (User data, hashed passwords)

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI components |
| Vite | Build tool + dev proxy |
| JavaScript (ES6+) | Logic |
| CSS3 | Styling |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | REST API framework |
| JWT (jsonwebtoken) | Authentication tokens |
| bcrypt | Password hashing |
| pg | PostgreSQL client |
| dotenv | Environment variables |
| cors | Cross-origin requests |

### Database & Deployment
| Service | Purpose |
|---|---|
| PostgreSQL (Neon) | Cloud database |
| Vercel | Frontend hosting |
| Railway | Backend hosting |

---

## 🔐 Security Features

- Passwords hashed with **bcrypt** (salt rounds: 10) — never stored as plain text
- **JWT tokens** expire after 1 hour
- API keys and secrets stored in **environment variables** — never in code
- Backend acts as **proxy** — external API never called from browser
- Protected routes use **verifyToken middleware** on every request

---

## 📁 Project Structure

```
project/
├── server/                  # Express Backend
│   ├── server.js            # Main server + all routes
│   ├── db.js                # PostgreSQL connection
│   ├── setupDb.js           # Database table setup
│   ├── .env                 # Environment variables (not committed)
│   └── package.json
│
└── client/                  # React Frontend (Vite)
    ├── src/
    │   ├── App.jsx           # Auth state management
    │   ├── pages/
    │   │   ├── Login.jsx     # Login + Register page
    │   │   └── Dashboard.jsx # Protected country search
    │   └── utils/
    │       └── api.js        # All API calls centralized
    ├── .env                  # Vite environment variables
    └── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- PostgreSQL database (or free Neon account)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/countries-explorer.git
cd countries-explorer
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create `.env` file:
```bash
JWT_SECRET=your_jwt_secret_key
DATABASE_URL=your_postgresql_connection_string
```

Setup database and start server:
```bash
node setupDb.js     # creates users table (run once)
node server.js      # starts on port 5000
```

### 3. Setup Frontend
```bash
cd client
npm install
```

Create `.env` file:
```bash
VITE_API_URL=http://localhost:5000
```

Start React app:
```bash
npm run dev         # starts on port 5173
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🔌 API Endpoints

### Public Routes
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/register` | Register new user |
| POST | `/api/login` | Login + receive JWT token |

### Protected Routes (JWT required)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/profile` | Get logged in user profile |
| GET | `/api/country/:name` | Full country data |
| GET | `/api/country/:name/summary` | Shaped country data |
| GET | `/api/country/:name/capital` | Capital + population |

### Example Request
```javascript
// All protected routes require Authorization header
fetch('/api/country/india/summary', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```

### Example Response
```json
{
  "country": "india",
  "capital": "New Delhi",
  "population": 1380004385,
  "currency": "Indian rupee",
  "flag": "https://flagcdn.com/in.png"
}
```

---

## 💡 Key Learnings

- Implemented **JWT authentication** flow end to end
- Understood why API calls should go through backend (**proxy pattern**)
- Used **bcrypt** for secure password storage
- Built custom **Express middleware** for route protection
- Configured **CORS** for cross-origin frontend-backend communication
- Deployed fullstack app with proper **environment variable** management

---

## 🤝 Connect

**Avanish Tiwari**  
📧 avanishtiwari@outlook.in  


---

⭐ If you found this project helpful, give it a star!
