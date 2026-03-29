<div align="center">
<!-- Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:3b82f6&height=200&section=header&text=Employee%20Management%20System&fontSize=38&fontColor=ffffff&fontAlignY=38&desc=Full-Stack%20Enterprise%20Application&descAlignY=58&descSize=18" width="100%"/>
<br/>
<!-- Badges -->
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
<br/>
![GitHub Stars](https://img.shields.io/github/stars/sunilmallela/employee-management?style=social)
![GitHub Forks](https://img.shields.io/github/forks/sunilmallela/employee-management?style=social)
![GitHub Issues](https://img.shields.io/github/issues/sunilmallela/employee-management?color=red)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
</div>
---
📌 Project Overview
> A **production-ready**, full-stack employee management application built with enterprise-grade architecture. This system enables organizations to manage employee records efficiently with a modern React frontend, robust Spring Boot backend, and containerized deployment via Docker.
<br/>
<div align="center">
🎯 Purpose	🏗️ Architecture	🚀 Deployment
Enterprise HR Data Management	3-Tier MVC	Docker + AWS EC2
</div>
---
✨ Core Features
<table>
  <tr>
    <td>➕ <b>Add Employee</b> — Create new employee records with full details</td>
    <td>✏️ <b>Update Employee</b> — Edit and modify existing employee data</td>
  </tr>
  <tr>
    <td>❌ <b>Delete Employee</b> — Remove employee records securely</td>
    <td>📋 <b>View Employee List</b> — Browse all employees in a clean table view</td>
  </tr>
  <tr>
    <td>🔍 <b>Search Employees</b> — Filter and find employees instantly</td>
    <td>🔗 <b>REST API</b> — Full RESTful API integration (Spring Boot)</td>
  </tr>
  <tr>
    <td>🐳 <b>Dockerized</b> — Containerized multi-service setup</td>
    <td>☁️ <b>AWS Ready</b> — Deployable on EC2 with minimal config</td>
  </tr>
</table>
---
🛠️ Tech Stack
<div align="center">
Frontend
![React](https://img.shields.io/badge/-React.js%20(Vite)-61DAFB?style=flat-square&logo=react&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
Backend
![Java](https://img.shields.io/badge/-Java%2017-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![REST API](https://img.shields.io/badge/-REST%20APIs-FF6C37?style=flat-square&logo=postman&logoColor=white)
Database
![MySQL](https://img.shields.io/badge/-MySQL%208.x-4479A1?style=flat-square&logo=mysql&logoColor=white)
DevOps & Cloud
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/-Docker%20Compose-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/-AWS%20EC2-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Jenkins](https://img.shields.io/badge/-Jenkins%20CI/CD-D24939?style=flat-square&logo=jenkins&logoColor=white)
</div>
---
🏗️ Project Structure
```
EMP/
│
├── 📁 Employee-Management-React/          # Frontend (React + Vite)
│   ├── 📁 src/
│   │   ├── 📁 components/                 # Reusable UI Components
│   │   ├── 📁 services/                   # API Service Layer (Axios)
│   │   ├── 📄 App.jsx                     # Root Application Component
│   │   ├── 📄 main.jsx                    # React Entry Point
│   │   └── 📄 index.css                   # Global Styles
│   ├── 📄 index.html
│   ├── 📄 package.json
│   └── 🐳 Dockerfile                      # Frontend Container Config
│
├── 📁 Employee-Management-SpringBoot/     # Backend (Spring Boot)
│   ├── 📁 src/main/java/com/example/emp/
│   │   ├── 📁 controller/                 # REST Controllers
│   │   ├── 📁 entity/                     # JPA Entity Classes
│   │   ├── 📁 model/                      # Data Transfer Objects
│   │   ├── 📁 repository/                 # Spring Data JPA Repositories
│   │   ├── 📁 service/                    # Business Logic Layer
│   │   └── 📄 EmpBackendApplication.java  # Spring Boot Entry Point
│   ├── 📁 resources/
│   │   └── 📄 application.properties      # DB & Server Configuration
│   ├── 🐳 Dockerfile                      # Backend Container Config
│   └── 📄 pom.xml                         # Maven Dependencies
│
└── 🐳 docker-compose.yml                  # Multi-Container Orchestration
```
---
🔗 API Reference
Method	Endpoint	Description	Status
`GET`	`/api/employees`	Retrieve all employees	✅
`GET`	`/api/employees/{id}`	Get employee by ID	✅
`POST`	`/api/employees`	Create new employee	✅
`PUT`	`/api/employees/{id}`	Update employee record	✅
`DELETE`	`/api/employees/{id}`	Delete employee	✅
> 💡 **Base URL:** `http://localhost:8080` (local) | `http://<EC2-IP>:8080` (AWS)
---
⚙️ Getting Started
Prerequisites
```bash
✅ Java 17+
✅ Node.js 18+
✅ Docker & Docker Compose
✅ MySQL 8.x (for manual run)
✅ Maven 3.8+
```
---
🐳 Option 1: Run with Docker (Recommended)
```bash
# 1. Clone the repository
git clone https://github.com/sunilmallela/employee-management.git
cd employee-management

# 2. Start all services (frontend + backend + database)
docker-compose up --build

# 3. Access the application
# Frontend: http://localhost:3000
# Backend:  http://localhost:8080
```
---
🔧 Option 2: Run Manually
Backend (Spring Boot)
```bash
cd Employee-Management-SpringBoot

# Configure database in application.properties
# spring.datasource.url=jdbc:mysql://localhost:3306/empdb

mvn spring-boot:run
# Runs on http://localhost:8080
```
Frontend (React + Vite)
```bash
cd Employee-Management-React

npm install
npm run dev
# Runs on http://localhost:5173
```
---
🚀 Deployment on AWS EC2
```bash
# 1. SSH into your EC2 instance
ssh -i your-key.pem ec2-user@<your-ec2-ip>

# 2. Install Docker & Docker Compose
sudo yum install docker -y
sudo service docker start

# 3. Clone & Run
git clone https://github.com/sunilmallela/employee-management.git
cd employee-management
docker-compose up -d --build
```
> ⚠️ Make sure to open ports **3000**, **8080** in your EC2 Security Group.
---
🔮 Future Enhancements
[ ] 🔐 Role-based authentication (Admin / User / Manager)
[ ] 📄 Pagination & advanced sorting
[ ] 📊 Export data to Excel / PDF
[ ] 🧩 Microservices architecture
[ ] 📱 Mobile-responsive UI
[ ] 🔔 Email notifications
---
👨‍💻 Author
<div align="center">
<img src="https://avatars.githubusercontent.com/u/0?v=4" width="80" style="border-radius:50%"/>
Sunil Mallela
Java Full Stack Developer
![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)
![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)
![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=googlechrome&logoColor=white)
</div>
---
<div align="center">
⭐ Support This Project
If you found this helpful, give it a star — it helps others discover the project!
![Star this repo](https://img.shields.io/github/stars/sunilmallela/employee-management?style=social)
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:3b82f6,100:0f172a&height=100&section=footer" width="100%"/>
</div>
