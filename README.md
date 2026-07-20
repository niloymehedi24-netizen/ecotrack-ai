🌿 EcoTrack AI

EcoTrack AI is a modern full-stack **Agentic AI-powered sustainability platform** that helps users discover eco-friendly solutions, generate sustainability content, receive personalized recommendations, and track environmental impact.

Built with **Next.js, TypeScript, Node.js, Express.js, MongoDB, JWT Authentication, Google OAuth, and Groq Llama AI**.

---

## 🔗 Live Demo

### Frontend

https://ecotrack-ai-kappa.vercel.app/

### Backend API

https://ecotrack-ai-server.onrender.com/

---

# 📖 Project Overview

EcoTrack AI is designed to promote sustainable living through artificial intelligence. The platform combines a modern user experience with powerful AI capabilities, allowing users to explore eco-friendly products, interact with an AI sustainability assistant, generate green content, and access personalized recommendations.

This project fulfills the requirements of a **Full Stack Agentic AI Application** by demonstrating:

- Full-stack web development
- AI integration
- Prompt engineering
- Secure API architecture
- Database management
- Authentication & authorization
- Professional UI/UX design

---

# ✨ Features

## 🤖 AI Features

### AI Sustainability Assistant

- Ask sustainability-related questions
- Get AI-generated eco-friendly advice
- Context-aware conversational responses
- Powered by **Groq Llama 3.1 8B Instant**

### AI Content Generator

- Generate sustainability articles
- Create eco-friendly social media posts
- Produce environmental awareness content
- Adjustable output length and regeneration support

### Smart Recommendation Engine

- Personalized eco-product recommendations
- Sustainable lifestyle suggestions
- Context-aware filtering and refinement

---

# 🔐 Authentication & Authorization

### User Authentication

- User Registration
- Email & Password Login
- Google OAuth Login
- JWT Authentication
- Secure HTTP-only cookies

### Role-Based Access Control

Two user roles are implemented:

- **USER**
- **ADMIN**

Admin-only features include:

- Admin Dashboard
- Manage Users
- Manage Eco Items
- View Analytics
- System Statistics

---

# 🌱 Eco Solutions Marketplace

Users can explore sustainable products and solutions through a beautiful marketplace interface.

### Features

- Browse eco-friendly products
- Search products by name
- Filter by category
- Filter by price range
- Sort products
- Pagination (8 items per page)
- Product details page

### Categories

- Reusable
- Energy
- Waste
- Water

---

# 📊 Admin Dashboard

The admin panel provides a complete management system for the platform.

### Dashboard Overview

- Total users
- Total admins
- AI request statistics
- Environmental statistics

### Manage Users

- View all registered users
- View user roles
- User management interface

### Manage Eco Items

- Add new eco items
- Edit existing items
- Delete items
- Manage marketplace inventory

### Analytics

- User growth visualization
- Interactive charts
- Data-driven insights

---

# 📱 UI & UX Features

- Fully responsive design
- Modern glassmorphism UI
- Smooth animations with Framer Motion
- Professional dashboard layout
- Loading states
- Empty states
- Error handling
- Mobile-friendly navigation
- Beautiful pagination system

---

# 🛠 Tech Stack

## Frontend

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **TanStack Query**
- **Axios**
- **Framer Motion**
- **React Hook Form**
- **Zod Validation**
- **Recharts**
- **React Icons**
- **Hero UI**

## Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **JWT Authentication**
- **bcryptjs**
- **Cookie Parser**
- **Zod Validation**

## AI Integration

- **Groq API**
- **Llama 3.1 8B Instant**

---

# 📂 Project Structure

## Frontend

```text
ecotrack-ai/
│
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── admin/
│   │   ├── explore/
│   │   └── api/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── providers/
│   ├── validation/
│   ├── types/
│   └── utils/
```

## Backend

```text
ecotrack-ai-server/
│
├── src/
│   ├── config/
│   ├── modules/
│   │   ├── auth/
│   │   ├── admin/
│   │   ├── items/
│   │   └── ai/
│   ├── middlewares/
│   ├── utils/
│   ├── types/
│   └── index.ts
```

---

# 🔐 Environment Variables

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
```

## Backend (.env)

```env
PORT=8000
MONGODB_URI=
JWT_SECRET=
CLIENT_URL=http://localhost:3000
GROQ_API_KEY=
GOOGLE_CLIENT_ID=
NODE_ENV=development
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Frontend Setup

```bash
cd ecotrack-ai
npm install
npm run dev
```

Frontend will run at:

```text
http://localhost:3000
```

## Backend Setup

```bash
cd ecotrack-ai-server
npm install
npm run dev
```

Backend will run at:

```text
http://localhost:8000
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register user    |
| POST   | `/api/auth/login`    | Login user       |
| POST   | `/api/auth/google`   | Google Login     |
| POST   | `/api/auth/logout`   | Logout user      |
| GET    | `/api/auth/me`       | Get current user |

## Eco Items

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/items`     | Get all eco products |
| GET    | `/api/items/:id` | Get product details  |
| POST   | `/api/items`     | Create item          |
| PATCH  | `/api/items/:id` | Update item          |
| DELETE | `/api/items/:id` | Delete item          |

## Admin

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | `/api/admin/dashboard` | Dashboard statistics |
| GET    | `/api/admin/users`     | Manage users         |
| GET    | `/api/admin/analytics` | Analytics data       |

## AI

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| POST   | `/api/ai/chat`     | AI sustainability assistant |
| POST   | `/api/ai/generate` | AI content generation       |

---

# 🔒 Security Features

- JWT authentication
- HTTP-only cookies
- Password hashing with bcryptjs
- Protected routes
- Role-based authorization
- Request validation using Zod
- Secure API architecture
- CORS configuration for production

---

# 📈 Future Improvements

- Carbon footprint calculator
- Real-time AI chat
- User sustainability leaderboard
- Environmental challenges
- Notification system
- AI image understanding
- Document intelligence

---

# 👨‍💻 Author

**Mehedi Hasan Niloy**

- GitHub: https://github.com/niloymehedi24-netizen
- LinkedIn: https://www.linkedin.com/in/mehedi-niloy/

---

# 📄 License

This project is developed for educational and portfolio purposes.

---

⭐ If you like this project, consider giving it a **star** on GitHub!
