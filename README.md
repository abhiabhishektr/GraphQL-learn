# GraphQL-learn

This repository contains the backend for a simple blog management system using **GraphQL**. The API allows you to perform user authentication and manage blogs (create, read). You can use **Postman** to interact with the GraphQL API by importing the provided Postman collection.

## Features
- **User Registration**: Users can register with their name, email, and password.
- **User Login**: Users can log in with their email and password to receive a JWT token.
- **Create Blog**: Authenticated users can create new blog posts.
- **Get All Blogs**: Allows fetching all blog posts along with the author details.

## GraphQL Operations
The API supports the following operations:

### 1. **Register User**
- **Mutation** to create a new user with `name`, `email`, and `password`.
- Example request:
    ```graphql
    mutation {
      register(name: "John Doe", email: "john@example.com", password: "password123") {
        id
        name
        email
      }
    }
    ```

### 2. **Login User**
- **Mutation** to log in and get a JWT token.
- Example request:
    ```graphql
    mutation {
      login(email: "john@example.com", password: "password123")
    }
    ```

### 3. **Get All Blogs**
- **Query** to fetch all blogs along with author information (name and email).
- Example request:
    ```graphql
    query {
      getAllBlogs {
        id
        title
        content
        author {
          name
          email
        }
      }
    }
    ```

### 4. **Create Blog**
- **Mutation** to create a new blog post. Requires an **Authorization** header with a valid JWT token.
- Example request:
    ```graphql
    mutation {
      createBlog(title: "My First Blog", content: "This is the content of my first blog") {
        id
        title
        content
        author {
          name
          email
        }
      }
    }
    ```
- **Authorization**: Bearer `<JWT_TOKEN>`

## Steps to Import Postman Collection

1. Open **Postman**.
2. Click on the **"Import"** button at the top-left of Postman.
3. Choose **"Raw Text"**.
4. Paste the **Postman Collection JSON** provided.
5. Click **"Continue"** and then **"Import"**.

## Environment Setup

1. **Clone the repository** to your local machine.
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Start the server**:
    ```bash
    npm start
    ```
4. The GraphQL API will be available at `http://localhost:4000/graphql`.

## Authorization
- After logging in with the `Login User` mutation, you will receive a JWT token.
- Use this token as the `Authorization` header (e.g., `Bearer <JWT_TOKEN>`) when making requests that require authentication (e.g., creating a blog).

## Dependencies
- **Express.js** for server management
- **Apollo Server** for GraphQL implementation
- **JWT** for user authentication
- **Postman** for API testing

