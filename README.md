# Final-Project
# CarbonSasa Web Platform. 

**CarbonSasa** is a MERN stack web platform designed to help users track and manage their tree-planting portfolios. This platform allows users to register, log in, list the trees they have planted, and monitor their health through media uploads and (future) AI analysis.

This repository contains the complete code for Phase 1 of the project.

## 🚀 Tech Stack

* **MongoDB:** NoSQL database for storing user and tree data.
* **Express.js:** Backend framework for building the RESTful API.
* **React.js:** Frontend library for building the user interface.
* **Node.js:** JavaScript runtime environment for the backend.
* **Other key packages:** Mongoose, JSON Web Tokens (JWT), bcrypt.js, Multer, Axios, React Router.

## ✨ Features (Phase 1)

* **User Authentication:** Secure user registration and login (JWT-based).
* **Protected Routes:** Backend API routes and frontend pages are protected, accessible only to logged-in users.
* **Tree Management (Portfolio):**
    * Users can create new tree entries (species, location, planting date).
    * Users can view a dashboard list of all trees linked to their account.
* **Tree Details:** Users can click on a tree to see a dedicated details page.
* **Media Upload API:** A stubbed-out API endpoint (`/api/analysis/:treeId`) using `multer` to accept image uploads for a specific tree.

## 🛠️ How to Run This Project

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js (v16 or later)
* NPM
* A MongoDB connection string (e.g., from a free MongoDB Atlas cluster)

### 1. Set Up the Backend

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd carbonsasa
    ```
2.  Navigate to the backend and install dependencies:
    ```bash
    cd backend
    npm install
    ```
3.  Create a `.env` file in the `backend` directory:
    ```env
    MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
    JWT_SECRET=YOUR_OWN_RANDOM_SECRET_KEY
    ```
4.  Start the backend server:
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:5000`.

### 2. Set Up the Frontend

1.  Open a new terminal in the root `carbonsasa` directory.
2.  Navigate to the frontend and install dependencies:
    ```bash
    cd frontend
    npm install
    ```
3.  Start the frontend React app:
    ```bash
    npm start
    ```
    The React app will open and run on `http://localhost:3000`.