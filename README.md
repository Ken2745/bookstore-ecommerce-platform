# ShelfSpace Bookstore Application

A full-stack e-commerce application for buying and selling books, featuring a Spring Boot backend and an Angular frontend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)

## Features

### Frontend (Angular)

- User authentication (login, register, profile)
- Product browsing and search
- Shopping basket functionality
- Checkout process with address and shipment options
- Responsive design with Angular Material and Bootstrap
- Breadcrumb navigation

### Backend (Spring Boot)

- RESTful API for book management
- User account management
- Order processing and checkout
- MySQL database integration
- Redis caching support
- JWT authentication

## Tech Stack

### Backend

- **Java**: 21 (LTS)
- **Spring Boot**: 4.0.3
- **Spring Data JPA**: For database operations
- **Spring Web MVC**: For REST APIs
- **MySQL**: Database
- **Redis**: Caching
- **Lombok**: Code generation
- **Maven**: Build tool

### Frontend

- **Angular**: 21
- **TypeScript**: 5.9.2
- **Angular Material**: UI components
- **Bootstrap**: CSS framework
- **RxJS**: Reactive programming
- **Ngx-Bootstrap**: Bootstrap components for Angular
- **Ngx-Spinner**: Loading spinners
- **Ngx-Toastr**: Toast notifications

### Infrastructure

- **Docker**: Containerization
- **Docker Compose**: Multi-container orchestration

## Prerequisites

- Java 21 (LTS)
- Node.js 18+ and npm
- Docker and Docker Compose
- Maven (or use Maven wrapper `mvnw`)

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bookstore
```

### 2. Backend Setup

1. Navigate to the root directory (contains `pom.xml`)
2. The project uses Maven wrapper, so no need to install Maven separately
3. Database configuration is in `src/main/resources/application.properties`

### 3. Frontend Setup

1. Navigate to the `client` directory

```bash
cd client
npm install
```

### 4. Database Setup

The application uses Docker Compose for MySQL and Redis:

```bash
cd docker
docker-compose up -d
```

This will start:

- MySQL on port 3306 with root password `[password]`
- Redis on port 6379
- Initialize database with `data.sql`

## Running the Application

### Backend

```bash
# From root directory
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080` (default Spring Boot port).

### Frontend

```bash
cd client
npm start
```

The frontend will start on `http://localhost:4200`.

### Full Application

1. Start Docker containers (database and cache)
2. Start backend
3. Start frontend
4. Access the application at `http://localhost:4200`

## API Documentation

The backend provides REST APIs for:

- User management (`/api/account/*`)
- Product catalog (`/api/store/*`)
- Shopping basket (`/api/basket/*`)
- Checkout process (`/api/checkout/*`)

For detailed API documentation, refer to the Swagger/OpenAPI documentation at `http://localhost:8080/swagger-ui.html` (if configured).

## Project Structure

``` bookstore/
├── client/                 # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── account/    # User authentication
│   │   │   ├── basket/     # Shopping cart
│   │   │   ├── checkout/   # Order processing
│   │   │   ├── core/       # Shared services
│   │   │   ├── home/       # Landing page
│   │   │   └── store/      # Product catalog
│   │   └── assets/
│   └── package.json
├── docker/                 # Docker configuration
│   ├── docker-compose.yml
│   └── data.sql
├── src/                    # Spring Boot backend
│   ├── main/java/com/ecommerce/bookstore/
│   └── main/resources/
├── pom.xml                 # Maven configuration
└── README.md
```
## Application Flow
<img width="975" height="426" alt="image" src="https://github.com/user-attachments/assets/190508e0-2495-4203-ad1e-6aaa9e72096c" />
<img width="975" height="415" alt="image" src="https://github.com/user-attachments/assets/9584e90d-c41f-4ef7-b9c2-31929c376bbb" />
<img width="975" height="517" alt="image" src="https://github.com/user-attachments/assets/61456bd0-b8b6-410e-a7fd-0374b0d1feb6" />
<img width="975" height="444" alt="image" src="https://github.com/user-attachments/assets/e66dc929-eebf-4374-8965-1d649afd9a7c" />
<img width="975" height="740" alt="image" src="https://github.com/user-attachments/assets/f4c98938-545a-4c45-b53b-a5bd824087ee" />
<img width="975" height="556" alt="image" src="https://github.com/user-attachments/assets/90139ed4-457b-4e5c-9ed3-91f3d532d7e7" />
<img width="975" height="487" alt="image" src="https://github.com/user-attachments/assets/732b8675-816e-4d10-b0c2-e55a67fc1fbf" />
<img width="975" height="535" alt="image" src="https://github.com/user-attachments/assets/e2552d5a-cf07-447b-b2c6-8093eb5e45a8" />
<img width="975" height="552" alt="image" src="https://github.com/user-attachments/assets/ced3430b-3ad5-49f7-adde-45b5f4dea780" />
<img width="975" height="403" alt="image" src="https://github.com/user-attachments/assets/ed89b6c5-77d2-40e1-a1d8-5a7cee2a5373" />

