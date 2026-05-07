<div align="center">

# 🏥 Diagnostics Center Management System

### A Modern Full-Stack MERN Application for Digital Diagnostics Center Management

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Node.js-Backend-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge" />
</p>

<p align="center">
  The Diagnostics Center Management System is a powerful web-based platform that helps diagnostic centers automate operations and provide a smooth digital healthcare experience for patients.
</p>

</div>

---

# 🌐 Live Links

| Platform | Live URL |
|----------|-----------|
| 👨‍⚕️ User Panel | https://kawkhali-diagonstic-center-user.vercel.app/ |
| 🛠️ Admin Panel | https://kawkhali-diagonstic-center-admin.vercel.app/ |
| ⚙️ Backend Server | https://complaint-management-system-isp-emp.vercel.app/ |

---

# 👨‍💻 Developer

### Monayem Hossain

🔗 LinkedIn:  
https://www.linkedin.com/in/monayem-hossain/

---

# 📖 About The Project

The **Diagnostics Center Management System** is a complete full-stack healthcare management solution built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

This platform helps diagnostics centers digitize and manage their daily operations efficiently. Patients can easily book diagnostic services online, while administrators can manage appointments, services, reports, and users from a centralized dashboard.

---

# 🚀 Project Features

## 👨‍⚕️ Patient Features

✅ Browse diagnostic services  
✅ Book appointments online  
✅ Upload required documents  
✅ Receive booking updates  
✅ View appointment details securely  

---

## 🛠️ Admin Features

✅ Manage diagnostic services  
✅ Control categories & pricing  
✅ Manage patient appointments  
✅ Upload and manage reports  
✅ Manage users and system activities  

---

# 🔐 Authentication & Security

- JWT Authentication
- Secure Authorization System
- Password Hashing using bcryptjs
- API Rate Limiting
- MongoDB Query Sanitization
- Helmet Security Middleware
- HPP Protection

---

# ☁️ Cloud & Deployment

- Cloudinary Image Upload & Storage
- Multer Memory Storage
- Serverless-Compatible Backend
- Vercel Deployment
- Environment Variable Security

---

# 🧰 Technologies Used

## 🎨 Frontend

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI |
| Redux Toolkit | State Management |
| React Router | Routing |
| Tailwind CSS | Styling |
| Material UI | UI Components |

---

## ⚙️ Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Backend Runtime |
| Express.js | API Framework |
| MongoDB | Database |
| Mongoose | ODM |

---

# 📂 Project Structure

```bash
├── api/
│   └── index.js
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── utility/
├── helper/
├── config/
└── app.js
```

---

# 📦 Installation & Setup

## 1️⃣ Clone The Repository

```bash
git clone https://github.com/monayemhossain90/Kawkhali-diagonstic-center.git
```

---

# ⚙️ Backend Setup

## Navigate To Backend Folder

```bash
cd diagnostics-api
```

---

## Create `.env` File

Inside the backend folder create a `.env` file and add:

```env
MONGO_URI=[your mongodb uri]

SECRET_KEY=secret@123

# Cloudinary
CLOUD_NAME=dr1ge6msw
API_KEY=885931437661426
API_SECRET=8igfXZ7gP4uZI1GBEiGppAYDt8A

# SMTP Server
SMTP_USERNAME=[smtp username]
SMTP_PASSWORD=[smtp password]
SMTP_FROM=[your email]
```

---

## Install Dependencies

```bash
yarn install
```

---

## Run Backend Server

### Development Mode

```bash
yarn dev
```

### Production Mode

```bash
yarn start
```

---

# 🛠️ Admin Panel Setup

## Navigate To Admin Panel

```bash
cd diagnostics-admin
```

## Install Packages

```bash
yarn install
```

## Set Backend Base URL

Inside:

```bash
src/redux/features/api/apiSlice.js
```

Set:

```bash
http://localhost:5000/api
```

## Run Admin Panel

```bash
npm run dev
```

---

# 👨‍⚕️ User Panel Setup

## Navigate To User Panel

```bash
cd diagnostics-users
```

## Install Packages

```bash
yarn install
```

## Set Backend Base URL

Inside:

```bash
src/redux/features/api/apiSlice.js
```

Set:

```bash
http://localhost:5000/api
```

## Run User Panel

```bash
npm run dev
```

---

# 📡 REST API Architecture

✅ Modular Controller-Service Structure  
✅ Scalable Backend Design  
✅ RESTful API Implementation  
✅ Maintainable Project Structure  
✅ Serverless Deployment Compatible  

---

# 🖼️ Cloudinary Upload System

- Image Upload using Multer Memory Storage
- Cloud-based Image Management
- Optimized for Vercel Deployment
- Fast and Secure Upload Process

---

# 🚀 Deployment

| Platform | Usage |
|----------|-------|
| Vercel | Frontend Deployment |
| Vercel | Backend Deployment |
| Cloudinary | Image Storage |

---

# 🎯 Future Improvements

- Online Payment Gateway
- Email Verification
- SMS Notification System
- Doctor Management System
- PDF Report Generation
- Real-time Notification System

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub and support the development.

---

# 📜 License

This project is developed for educational and commercial diagnostic center management purposes.

---

<div align="center">

### ❤️ Built with MERN Stack by Monayem Hossain

</div>
