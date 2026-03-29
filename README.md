👥 Employee Management System
![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)
> **A full-stack Employee Management System with complete CRUD operations. Add, view, update, and delete employee records through a clean React UI backed by a Spring Boot REST API and MySQL — fully containerized with Docker Compose.**
---
📋 Table of Contents
Features
Tech Stack
Project Structure
Architecture
Getting Started (Local)
Running with Docker
API Reference
Database Schema
Author
---
✨ Features
➕ Add Employee — Create new employee records with all required details
📋 View All Employees — Display complete list of employees in a responsive table
✏️ Update Employee — Edit and save changes to existing employee records
🗑️ Delete Employee — Remove employee records with a single click
🔗 REST API — Clean, well-structured Spring Boot REST endpoints
🗄️ Persistent Database — MySQL with Docker volume ensures data is never lost
🐳 One-Command Setup — `docker-compose up` starts React + Spring Boot + MySQL together
📱 Responsive UI — Built with React + Vite for a fast, modern user experience
---
🛠️ Tech Stack
Layer	Technology
Frontend	React 18, Vite, Axios
Backend	Spring Boot 3, Java 17, Spring Data JPA
Database	MySQL 8
ORM	Hibernate / JPA
Containerization	Docker, Docker Compose
Build Tools	Vite (frontend), Maven (backend)
---
📁 Project Structure
```
EMP/
├── Employee-Management-React/         # React + Vite Frontend
│   ├── src/
│   │   ├── components/                # UI components (List, Add, Edit)
│   │   ├── services/                  # Axios API service calls
│   │   ├── App.jsx                    # Root component with routing
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx                   # React entry point
│   ├── .DockerIgnore
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── Employee-Management-SpringBoot/    # Spring Boot Backend
│   ├── src/main/
│   │   ├── java/com/example/emp/
│   │   │   ├── controller/            # REST API controllers
│   │   │   ├── entity/                # JPA Entity classes
│   │   │   ├── model/                 # Request/Response models
│   │   │   ├── repository/            # Spring Data JPA repositories
│   │   │   ├── service/               # Business logic layer
│   │   │   └── EmpBackendApplication.java  # Main Spring Boot entry point
│   │   └── resources/
│   │       ├── application.properties
│   │       └── applicationexample.properties
│   ├── .gitattributes
│   ├── .gitignore
│   ├── Dockerfile
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
└── docker-compose.yml                 # Orchestrates all 3 services
```
---
🏗️ Architecture
```
┌──────────────────────────────────────────────┐
│         React Frontend (Port 5173)            │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │  Employee Table (View All)           │    │
│  │  Add Employee Form                   │    │
│  │  Edit Employee Form                  │    │
│  │  Delete Confirmation                 │    │
│  └──────────────────────────────────────┘    │
│  services/EmployeeService.js (Axios)          │
└─────────────────┬────────────────────────────┘
                  │  HTTP REST (GET / POST / PUT / DELETE)
                  │  /api/employees
                  ▼
┌──────────────────────────────────────────────┐
│       Spring Boot Backend (Port 8080)         │
│                                              │
│  controller/ → service/ → repository/        │
│  (REST Layer)  (Logic)    (JPA/Hibernate)     │
└─────────────────┬────────────────────────────┘
                  │  JDBC / JPA
                  ▼
┌──────────────────────────────────────────────┐
│            MySQL Database (Port 3306)         │
│                                              │
│  employees table                             │
│  Docker volume (data persists on restart)    │
└──────────────────────────────────────────────┘
```
---
🚦 Getting Started (Local)
Prerequisites
Java 17+
Node.js 18+ & npm
Maven 3.8+
MySQL 8 (only for local setup; Docker handles this automatically)
1. Clone the Repository
```bash
git clone https://github.com/SUNILMALLELA/Employee-Management-React-SpringBoot.git
cd employee-management-system
```
2. Configure the Backend
Edit `Employee-Management-SpringBoot/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
```
3. Run the Backend
```bash
cd Employee-Management-SpringBoot
mvn clean install
mvn spring-boot:run
```
> Backend starts at: `http://localhost:8080`
4. Run the Frontend
```bash
cd Employee-Management-React
npm install
npm run dev
```
> Frontend starts at: `http://localhost:5173`
---
🐳 Running with Docker
> ✅ Recommended — starts React, Spring Boot **and** MySQL together. Works on **any system with Docker installed**.
Step 1 — Build and Start All Services
```bash
docker-compose up --build
```
This command will:
Pull the MySQL 8 image and initialize the database automatically
Build and start the Spring Boot backend
Build and start the React (Vite) frontend
Connect all three services on a shared internal network
Step 2 — Open the App
Service	URL
React Frontend	http://localhost:5173
Spring Boot API	http://localhost:8080
MySQL	localhost:3306
Stop All Services
```bash
docker-compose down
```
Reset Database (Remove Volume)
```bash
docker-compose down -v
```
---
📡 API Reference
Base URL: `http://localhost:8080/api/employees`
Method	Endpoint	Description
`GET`	`/api/employees`	Fetch all employees
`GET`	`/api/employees/{id}`	Fetch employee by ID
`POST`	`/api/employees`	Create a new employee
`PUT`	`/api/employees/{id}`	Update employee by ID
`DELETE`	`/api/employees/{id}`	Delete employee by ID
---
Get All Employees — `GET /api/employees`
Response `200 OK`:
```json
[
  {
    "id": 1,
    "firstName": "Manju",
    "lastName": "Kumar",
    "email": "manju@company.com",
    "department": "Engineering",
    "role": "Full Stack Developer"
  }
]
```
---
Add Employee — `POST /api/employees`
Request Body:
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@company.com",
  "department": "Marketing",
  "role": "Marketing Manager"
}
```
Response: `201 Created`
---
Update Employee — `PUT /api/employees/{id}`
Request Body:
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@company.com",
  "department": "Marketing",
  "role": "Senior Marketing Manager"
}
```
Response: `200 OK`
---
Delete Employee — `DELETE /api/employees/{id}`
Response: `200 OK`
---
🗃️ Database Schema
```sql
CREATE TABLE employees (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name  VARCHAR(100) NOT NULL,
    last_name   VARCHAR(100) NOT NULL,
    email       VARCHAR(150) UNIQUE NOT NULL,
    department  VARCHAR(100),
    role        VARCHAR(100),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
---
🐳 Docker Compose Overview
```yaml
version: '3.8'

services:

  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: employee_db
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - emp-network

  backend:
    build: ./Employee-Management-SpringBoot
    ports:
      - "8080:8080"
    depends_on:
      - mysql
    environment:
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/employee_db
      - SPRING_DATASOURCE_USERNAME=root
      - SPRING_DATASOURCE_PASSWORD=root
    networks:
      - emp-network

  frontend:
    build: ./Employee-Management-React
    ports:
      - "5173:5173"
    depends_on:
      - backend
    networks:
      - emp-network

volumes:
  mysql_data:

networks:
  emp-network:
    driver: bridge
```
---
🤝 Contributing
Fork the repo
Create your branch: `git checkout -b feature/your-feature`
Commit: `git commit -m 'Add feature'`
Push: `git push origin feature/your-feature`
Open a Pull Request
---
📄 License
This project is licensed under the MIT License. See LICENSE for details.
---
👨‍💻 Author
Your Name
💼 LinkedIn
🐙 GitHub
---
> ⭐ Found this useful? Give it a star — it helps a lot!