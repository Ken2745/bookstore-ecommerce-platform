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
