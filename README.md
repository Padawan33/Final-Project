# CarbonSasa 🌳🌍

> Plant Trees. Track Impact. Earn Credit.

[![React](https://img.shields.io/badge/frontend-React-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/backend-Node.js-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/backend-Express-000000?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/database-MongoDB-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/styling-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 Overview

**CarbonSasa** is a full-stack web platform designed to empower individuals and communities—particularly farmers in Kenya—to participate in carbon sequestration efforts.

The platform allows users to register planted trees, monitor their growth through photo updates, and visualize the environmental impact (sequestered carbon) and potential financial value of their efforts over time. It aims to bridge the gap between grassroots reforestation and the carbon credit market.

### 🚀 **Live Demo**
The application is deployed on Render.
**[View the Live Site](https://carbonsasa-frontend.onrender.com)**
**[Pitch Deck](https://www.canva.com/design/DAG5Us0fSW4/qkqTR8gKrnNuiDJsXUyevQ/view?utm_content=DAG5Us0fSW4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h44add0bc26)

---

## ✨ Key Features

### 👤 User Experience
* **Secure Authentication:** User registration and login using JSON Web Tokens (JWT).
* **Responsive Design:** A mobile-first interface built with Tailwind CSS, ensuring usability across all devices.
* **Dynamic Theming:** Includes a Dark Mode toggle and context-aware background imagery.
* **Public Home Page:** Displays real-time, aggregated statistics of the platform's total impact.

### 🌳 Tree Management (Dashboard)
* **Log New Trees:** Users can add details about new plantings, including species, location (lat/lng), date, and an initial photo.
* **Image Uploads:** Secure handling of tree images using Multer on the backend.
* **Tree Portfolio:** A grid view of all registered trees with quick access to details.

### 📊 Impact & Analytics
* **Individual Stats:** Users can view their personal total trees planted, estimated carbon offset (in kg), and potential financial earnings.
* **Calculation Engine:** Backend logic calculates impact based on tree age and species growth factors.

---

## 🛠️ Technology Stack

This project is built using the **MERN Stack**.

| Area | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js (v18) | Component-based UI library |
| | React Router v6 | Client-side routing and navigation |
| | Tailwind CSS | Utility-first CSS framework for styling |
| | Axios | HTTP client for API requests |
| | Framer Motion | UI animations and transitions |
| **Backend** | Node.js & Express.js | Server-side runtime and framework |
| | RESTful API | Architecture for frontend/backend communication |
| | JWT (jsonwebtoken) | Secure authentication |
| | Multer | Middleware for handling multipart/form-data (image uploads) |
| **Database** | MongoDB Atlas | Cloud NoSQL database |
| | Mongoose | ODM library for MongoDB modeling |
| **Deployment**| Render | Hosting for both separate frontend static site and backend service |

---

## ⚙️ Local Installation & Setup

Follow these steps to get a local copy up and running.

### Prerequisites
* Node.js (v18.x or higher recommended)
* npm (Node Package Manager)
* A MongoDB Atlas URI

### 1. Clone the Repository

```bash
git clone [https://github.com/Padawan33/carbonsasa.git](https://github.com/Padawan33/carbonsasa.git)
cd carbonsasa
2. Backend Setup
Navigate to the backend folder and install dependencies:

Bash

cd backend
npm install
Create an uploads directory for images:

Bash

mkdir uploads
Create a .env file in the backend root directory and add your secrets:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_long_random_string
NODE_ENV=development
Start the backend server:

Bash

npm run server
# Server should run on http://localhost:5000
3. Frontend Setup
Open a new terminal tab, navigate to the frontend folder, and install dependencies:

Bash

cd frontend
npm install
Create a .env file in the frontend root directory to point to your local backend:

Code snippet

REACT_APP_BACKEND_URL=http://localhost:5000
Start the frontend React development server:

Bash

npm start
# Application should open at http://localhost:3000
🚀 Deployment Information
The application is deployed as two separate services on Render:

Backend Service: A Node.js web service connected to MongoDB Atlas. It exposes the API endpoints and serves uploaded static images.

Frontend Static Site: The React application built and served statically. It communicates with the backend via the environment variable defined during deployment.

🗺️ Future Roadmap
[ ] Enhanced UX: Implement form validation feedback and loading spinners for better user guidance.

[ ] User Notifications: Add toast notifications for success/error actions.

[ ] Species Management Admin Panel: Allow admins to dynamically add new tree species and growth factors.

[ ] Interactive Map: Visualize planted trees on a map using the stored latitude/longitude data.

[ ] Social Sharing: Allow users to share their impact milestones on social media.