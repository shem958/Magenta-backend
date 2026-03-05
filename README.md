# Magenta Backend

A RESTful API backend for the Magenta business management system built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization** - JWT-based auth with role-based access control (admin, manager, employee)
- **Inventory Management** - Full CRUD operations with soft delete and restore functionality
- **Employee Management** - Manage employee records
- **Delivery Tracking** - Track and manage deliveries
- **Financial Records** - Handle financial data
- **Notifications** - System notifications with read/unread status
- **Security** - Helmet headers, CORS, rate limiting

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken) + bcryptjs
- **Security**: Helmet, CORS, express-rate-limit

## Project Structure

```
magenta-backend/
├── config/
│   └── db.js                 # MongoDB connection
├── src/
│   ├── server.js             # Express app entry point
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── deliveriesController.js
│   │   ├── employeesController.js
│   │   ├── financeController.js
│   │   ├── inventoryController.js
│   │   └── notificationController.js
│   ├── middleware/
│   │   └── authMiddleware.js # JWT verification & role auth
│   ├── models/
│   │   ├── Delivery.js
│   │   ├── Employee.js
│   │   ├── Finance.js
│   │   ├── Inventory.js
│   │   ├── Notification.js
│   │   └── User.js
│   └── routes/
│       ├── index.js          # Route aggregator
│       ├── authRoutes.js
│       ├── deliveriesRoutes.js
│       ├── employeesRoutes.js
│       ├── financeRoutes.js
│       ├── inventoryRoutes.js
│       └── notificationRoutes.js
├── .env.example
├── .gitignore
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd magenta-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env
   ```

4. Configure your `.env` file:

   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/magenta
   JWT_SECRET=your-64-character-secret-key
   PORT=5000
   ```

   Generate a secure JWT secret:

   ```bash
   openssl rand -hex 64
   ```

5. Start the server:

   ```bash
   # Development (with hot reload)
   npm run dev

   # Production
   npm start
   ```

## API Endpoints

Base URL: `http://localhost:5000/api`

### Authentication

| Method | Endpoint         | Description   | Access |
| ------ | ---------------- | ------------- | ------ |
| POST   | `/auth/register` | Register user | Public |
| POST   | `/auth/login`    | Login user    | Public |

**Register Request Body:**

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword",
  "role": "employee"
}
```

**Login Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "...",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "employee"
  }
}
```

### Inventory

| Method | Endpoint         | Description      | Access        |
| ------ | ---------------- | ---------------- | ------------- |
| GET    | `/inventory`     | Get all items    | Authenticated |
| POST   | `/inventory`     | Add new item     | Admin only    |
| PUT    | `/inventory/:id` | Update item      | Admin only    |
| DELETE | `/inventory/:id` | Soft delete item | Admin only    |

**Add Inventory Request Body:**

```json
{
  "name": "Widget A",
  "category": "Electronics",
  "quantity": 100,
  "minStockLevel": 10,
  "price": 29.99,
  "location": "Warehouse A",
  "supplier": {
    "name": "Acme Corp",
    "contact": "supplier@acme.com"
  }
}
```

### Deliveries

| Method | Endpoint          | Description        | Access |
| ------ | ----------------- | ------------------ | ------ |
| GET    | `/deliveries`     | Get all deliveries | Public |
| POST   | `/deliveries`     | Add delivery       | Public |
| PUT    | `/deliveries/:id` | Update delivery    | Public |
| DELETE | `/deliveries/:id` | Delete delivery    | Public |

### Employees

| Method | Endpoint         | Description       | Access |
| ------ | ---------------- | ----------------- | ------ |
| GET    | `/employees`     | Get all employees | Public |
| POST   | `/employees`     | Add employee      | Public |
| PUT    | `/employees/:id` | Update employee   | Public |
| DELETE | `/employees/:id` | Delete employee   | Public |

### Finance

| Method | Endpoint       | Description     | Access |
| ------ | -------------- | --------------- | ------ |
| GET    | `/finance`     | Get all records | Public |
| POST   | `/finance`     | Add record      | Public |
| PUT    | `/finance/:id` | Update record   | Public |
| DELETE | `/finance/:id` | Delete record   | Public |

### Notifications

| Method | Endpoint                  | Description           | Access        |
| ------ | ------------------------- | --------------------- | ------------- |
| GET    | `/notifications`          | Get all notifications | Authenticated |
| POST   | `/notifications`          | Create notification   | Authenticated |
| PATCH  | `/notifications/:id/read` | Mark as read          | Authenticated |

## Authentication

Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## User Roles

| Role     | Permissions                            |
| -------- | -------------------------------------- |
| admin    | Full access to all resources           |
| manager  | Read/write access (varies by resource) |
| employee | Basic read access                      |

## Rate Limiting

- **Window**: 15 minutes
- **Max Requests**: 100 per IP

## Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `npm start`   | Start production server        |
| `npm run dev` | Start development server       |
| `npm test`    | Run tests (not configured yet) |

## Environment Variables

| Variable     | Description                 | Required |
| ------------ | --------------------------- | -------- |
| `MONGO_URI`  | MongoDB connection string   | Yes      |
| `JWT_SECRET` | Secret key for JWT signing  | Yes      |
| `PORT`       | Server port (default: 5000) | No       |

## License

ISC
