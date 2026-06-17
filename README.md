# User Authentication API

A simple Node.js and Express.js Authentication API that provides user registration, login, logout, and protected route access using middleware-based authentication.

## Features

* User Registration (Sign Up)
* User Login
* User Logout (Sign Out)

---

## Project Structure

```text
project/
│
├── Controllers/
│   └── UserLogin.js
│
├── Middleware/
│   └── middleware.js
│
├── Routes/
│   └── UserRoute.js
│
├── index.js
├── package.json
├── .env
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd project-name
```

### Install Dependencies

```bash
npm install
```

### Run Server

```bash
node index.js
```


Server will start on:

```text
http://localhost:3000
```

---

## API Endpoints

### 1. User Signup

Creates a new user account.

**Endpoint**

```http
POST /user/signup
```

**Request Body**

```json
{
  "email": "vijay@example.com",
  "password": "password123"
}
```

**Response**

```json
{
  "message": "User created successfully"
}
```

---

### 2. User Login

Authenticates a user and creates a session/token.

**Endpoint**

```http
POST /user/login
```

**Request Body**

```json
{
  "email": "vijay@example.com",
  "password": "password123"
}
```

**Response**

```json
{
  "message": "Login successful"
}
```

---

### 3. User Signout

Logs out the authenticated user and clears authentication data.

**Endpoint**

```http
POST /user/signout
```

**Response**

```json
{
  "message": "User signed out successfully"
}
```

---


## Middleware

Authentication middleware checks for the presence of a valid authentication token before granting access to protected resources.

Example:

```javascript
app.get("/user", middleware, handler);
```

---

## Status Codes

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Resource Created      |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 500         | Internal Server Error |

---
