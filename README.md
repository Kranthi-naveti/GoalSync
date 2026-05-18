# GoalSync 🚀
## Enterprise Goal Management and Performance Tracking System

GoalSync is a full-stack web application designed to help organizations manage employee goals, track progress, conduct regular check-ins, perform performance reviews, and analyze workforce productivity through dashboards and reports.

The application supports three roles:

- **Employee** – Create goals, submit check-ins, and track personal progress.
- **Manager** – Review team goals, approve submissions, and conduct performance reviews.
- **Admin** – Manage cycles, audit logs, reports, and overall system analytics.

---

## 🌐 Live Demo

- **Frontend (Vercel):** https://goalsync-project.vercel.app
- **Backend (Render):** https://goalsync-project.onrender.com
- **Swagger UI:** https://goalsync-project.onrender.com/swagger-ui.html
---

## 📌 Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (Employee, Manager, Admin)
- Protected routes in React

### 🎯 Goal Management
- Create goals
- View goals
- Update progress
- Goal approval workflow

### 📈 Check-Ins
- Submit periodic updates
- Manager review of employee check-ins

### ⭐ Performance Reviews
- Self and manager reviews
- Ratings and comments

### 📊 Dashboard Analytics
- Total goals
- Pending approvals
- Completed goals
- Review statistics

### 📋 Audit Logs & Reports
- Administrative reporting
- Activity tracking

### 🗓️ Cycle Management
- Manage performance cycles and timelines

---

## 🛠️ Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- Lombok
- Maven
- Springdoc OpenAPI (Swagger)

### Database
- MySQL

### Deployment
- Vercel (Frontend)
- Render (Backend)
- Railway (MySQL Database)

---

## 📂 Overall Project Structure

```text
GoalSync/
│
├── backend/
│   ├── src/main/java/com/goalsync/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dto/
│   │   │   ├── request/
│   │   │   └── response/
│   │   ├── entity/
│   │   ├── repository/
│   │   ├── security/
│   │   ├── service/
│   │   │   └── impl/
│   │   └── GoalsyncBackendApplication.java
│   │
│   ├── src/main/resources/
│   │   └── application.properties
│   │
│   ├── pom.xml
│   └── mvnw
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   └── common/
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   └── RegisterPage.jsx
│   │   │   ├── employee/
│   │   │   ├── manager/
│   │   │   └── admin/
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Dockerfile
├── README.md
└── .gitignore

## 📦 Submission Details

### 1. 🌐 Live / Hosted Demo URL of the Portal

- **Frontend (Live Portal):** https://goalsync-project.vercel.app
- **Backend API:** https://goalsync-project.onrender.com
- **Swagger UI:** https://goalsync-project.onrender.com/swagger-ui.html

---

### 2. 💻 Source Code Repository

- **GitHub Repository:** https://github.com/Kranthi-naveti/GoalSync

---

### 3. 🏗️ Architecture Diagram

```text
┌─────────────────────────────┐
│        User Browser         │
│  (Employee / Manager / Admin)
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│   React + Vite Frontend     │
│      Hosted on Vercel       │
└──────────────┬──────────────┘
               │ REST API Calls (Axios + JWT)
               ▼
┌─────────────────────────────┐
│ Spring Boot Backend API     │
│      Hosted on Render       │
│  Spring Security + JWT      │
└──────────────┬──────────────┘
               │ JPA / Hibernate
               ▼
┌─────────────────────────────┐
│      MySQL Database         │
│      Hosted on Railway      │
└─────────────────────────────┘
