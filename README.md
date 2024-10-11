# Simple Product API

This is a simple RESTful API built using **Node.js**, **Express**, **Sequelize**, and **PostgreSQL** for managing products. The API supports full CRUD (Create, Read, Update, Delete) operations, along with querying, pagination, and filtering products by category.

## Features
- **Create** a new product
- **Read** products with support for pagination and filtering by category
- **Update** an existing product
- **Delete** a product
- **Sequelize** ORM for database interactions
- **PostgreSQL** as the database

## Requirements
Before running the project, make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository
Start by cloning the project repository to your local machine.
```bash
git clone https://github.com/YashDoshi01/SimpleProductAPI

```
### 2. Run the server Locally
Use the following command to run the server locally in your machine
```bash
cd server
npm run server
```

## API Endpoints

### 1. GET All products
GET /api/products?page={pageNumber}&pageSize={pageSize}

### 2. GET Products by ID
GET /api/products/:id

### 3. GET Products by Category
GET /api/products?s={categoryName}

### 4. CREATE a product
POST /api/products

Sample Example of the body
```bash
{
  "name": "Banana",
  "price": 1.25,
  "description": "Yellow ripe bananas",
  "category": "Fruits"
}
```
### 5. UPDATE product by ID
PUT /api/products/:id

Sample Update body
```bash
{
  "name": "Updated Banana",
  "price": 1.50
}
```
### 6. DELETE product by ID
DELETE /api/products/:id

