<h1 align="center">
    Diagnostics Center Management System Application
</h1>

<h3 align="center">
The Diagnostics Center Management System is a web-based application that helps diagnostic centers automate their daily activities and provide a better digital experience for patients. <br>

</h3>

<p>User Panel = https://kawkhali-diagonstic-center-user.vercel.app/</p>
<p>Admin Panel = https://kawkhali-diagonstic-center-admin.vercel.app/ </p>
<p> Server = https://complaint-management-system-isp-emp.vercel.app/</p>

<br>
[LinkedIn](https://www.linkedin.com/in/monayem-hossain/)

# About

A full-stack Diagnostics Center Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This platform is designed to simplify and digitize the operations of a modern diagnostic center, allowing patients to book diagnostic tests online while enabling administrators to manage services, appointments, reports, and users efficiently.

## Project Overview

The Diagnostics Center Management System is a web-based application that helps diagnostic centers automate their daily activities and provide a better digital experience for patients.

Patients can:

1. Browse available diagnostic tests
2. Book appointments online
3. Upload required documents
4. Receive notifications and updates
5. View booking information securely

Administrators can:

1. Manage diagnostic services and categories
2. Manage patient bookings and schedules
3. Handle user accounts
4. Upload and manage reports
5. Monitor system activities

The system focuses on:

1. Secure authentication
2. Scalable backend architecture
3. Fast API performance
4. Cloud-based image storage
5. Responsive user experience

## Technologies Used

# Frontend: 
React.js
Redux Toolkit
React Router
Tailwind CSS / Material UI

# Backend:   

Node.js
Express.js
MongoDB
Mongoose

# Authentication & Security: 

JWT Authentication
Password Hashing with bcryptjs
Rate Limiting
Mongo Sanitize
Helmet Security
HPP Protection

# Cloud & Deployment: 

Cloudinary (Image Upload & Storage)
Vercel Deployment
Environment Variables for Security

<br>

# Cloud & Deployment:
  ## User Authentication
Secure registration and login system
JWT-based authentication and authorization
Password encryption using bcryptjs

## Diagnostic Service Management
Create, update, and delete diagnostic services
Manage service categories and pricing
Dynamic service listing APIs

 ## Appointment & Booking System
Online appointment booking
Booking status management
Patient information handling

## Cloudinary Image Upload
Image upload using Multer memory storage
Cloudinary integration for cloud-based storage
Serverless-compatible upload system for Vercel

 ## Security Features
API rate limiting
MongoDB query sanitization
Helmet security middleware
HPP attack protection

 ## RESTful API Architecture
Structured REST API implementation
Modular controller-service architecture
Scalable and maintainable backend structure

<br>

├── api/index.js
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── utility/
├── helper/
├── config/
└── app.js

<br>
# Installation

```sh
git clone https://github.com/monayemhossain90/complaint-management-system-ISP
```
Open 4 terminals in separate windows/tabs.

Terminal 1: Setting Up Backend 
```sh
cd diagnostics-api
Create a file called .env in the backend folder.
Inside it write this :

```sh
MONGO_URI=[your mongodb uri]
SECRET_KEY=secret@123

# Cloudinary 
CLOUD_NAME=dr1ge6msw
API_KEY=885931437661426
API_SECRET=8igfXZ7gP4uZI1GBEiGppAYDt8A

# SMTP Server

SMTP_USERNAME=[smtp user name]
SMTP_PASSWORD=[smtp password]
SMTP_FROM=[your email for smtp]



```
 ## Run Project
yarn install

In Production Mode
yarn  start

In Development Mode
yarn dev
```



Terminal 2: Setting Up admin panel frontend
```sh
cd diagnostics-admin
yarn install

Set the backend baseurl  http://localhost:5000/api into   diagnostics-admin panel src>redux>features>api>apiSlice.js
Then run the admin panel
npm run dev
```


Terminal 3: Setting Up diagnostics-user panel 
```sh
cd diagnostics-users
yarn install
Set the backend baseurl  http://localhost:5000/api into   diagnostics-user panel src>redux>features>api>apiSlice.js
Then run the user panel
npm run dev
```



# Deployment
* vercel - server side and client side


 ## Developer

Developed by Monayem Hossain

Full Stack MERN Developer
Backend API Developer
Cloud Deployment & Integration
Software Tester