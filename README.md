# 👨‍💼 Employee Management System

A full-stack web application to manage employee records with complete CRUD operations. Built using React, Spring Boot, and Docker, this project demonstrates real-world enterprise application architecture.

---

## 📌 Project Overview

This system allows organizations to:

* Manage employee data efficiently
* Perform full CRUD operations
* Maintain scalable backend services
* Deploy using containerized environments

---

## 🏗️ Project Structure

```id="emp001"
EMP/
│
├── Employee-Management-React/        # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── Dockerfile
│
├── Employee-Management-SpringBoot/   # Backend (Spring Boot)
│   ├── src/main/java/com/example/emp/
│   │   ├── controller/
│   │   ├── entity/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── service/
│   │   ├── EmpBackendApplication.java
│   │
│   ├── resources/
│   │   ├── application.properties
│   │
│   ├── Dockerfile
│   ├── pom.xml
│
└── docker-compose.yml               # Multi-container setup
```

---

## ✨ Features

* ➕ Add Employee
* ✏️ Update Employee
* ❌ Delete Employee
* 📋 View Employee List
* 🔍 Search Employees
* 🔗 REST API integration
* 🐳 Dockerized application
* ☁️ AWS deployment ready
* 🔁 CI/CD ready (Jenkins)

---

## 🛠️ Tech Stack

**Frontend**

* React.js (Vite)
* HTML, CSS, JavaScript

**Backend**

* Java 17
* Spring Boot
* REST APIs

**Database**

* MySQL

**DevOps**

* Docker
* Docker Compose
* AWS EC2
* Jenkins

---

## ⚙️ How to Run the Project

### 🔹 Option 1: Run with Docker (Recommended)

```bash id="emp002"
docker-compose up --build
```

---

### 🔹 Option 2: Run Manually

#### Backend

```bash id="emp003"
cd Employee-Management-SpringBoot
mvn spring-boot:run
```

#### Frontend

```bash id="emp004"
cd Employee-Management-React
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/employees      | Get all employees  |
| GET    | /api/employees/{id} | Get employee by ID |
| POST   | /api/employees      | Create employee    |
| PUT    | /api/employees/{id} | Update employee    |
| DELETE | /api/employees/{id} | Delete employee    |


## 🚀 Future Enhancements

* Role-based authentication (Admin/User)
* Pagination & sorting
* Export data (Excel/PDF)
* Microservices architecture

---

## 👨‍💻 Author

**Sunil Mallela**
Java Full Stack Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
