<div align="center">
  <img src="https://socialify.git.ci/sukrutan1/Chat-App/image?description=1&font=Inter&name=1&owner=1&pattern=Solid&theme=Dark" alt="Chat-App Banner" width="800" />
</div>

<br/>

# Real-Time Chat Application

A full-stack, real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. This application allows users to create accounts, authenticate securely, and engage in real-time conversations with image-sharing capabilities.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery and receipt using Socket.io for a seamless chat experience.
- **User Authentication & Authorization**: Secure login and signup flows using JSON Web Tokens (JWT) and Bcrypt for password hashing.
- **Image Sharing**: Users can share images in their chats, securely uploaded and hosted via Cloudinary.
- **Global State Management**: Efficient and scalable frontend state management utilizing Zustand.
- **Responsive & Modern UI**: A sleek, user-friendly interface built with TailwindCSS and DaisyUI components, fully responsive across devices.
- **RESTful API Architecture**: Well-structured backend API endpoints handling user data, authentication, and message history.

## 🛠️ Tech Stack

### Frontend
<p>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.io" />
</p>

### Backend
<p>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
  <img src="https://img.shields.io/badge/cloudinary-%238626C3.svg?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
</p>

## 📂 Project Structure

This project adopts a monorepo-style structure, separating the frontend client and the backend server.

```text
Chat-App/
├── backend/               # Node.js & Express API
│   ├── src/
│   │   ├── controllers/   # Route controllers (auth, messages)
│   │   ├── lib/           # Utility functions (socket setup, db connection)
│   │   ├── models/        # Mongoose database schemas
│   │   ├── routes/        # Express API routes
│   │   └── index.js       # Backend entry point
│   └── package.json
└── frontend/              # React Application (Vite)
    ├── src/
    │   ├── components/    # Reusable React components
    │   ├── lib/           # Utility functions and axios config
    │   ├── pages/         # Application pages (Login, Home, etc.)
    │   ├── store/         # Zustand global state stores
    │   ├── App.jsx        # Root component
    │   └── main.jsx       # Frontend entry point
    └── package.json
```

## ⚙️ Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A [MongoDB](https://www.mongodb.com/) URI for the database.
- A [Cloudinary](https://cloudinary.com/) account for image uploads.

### 1. Clone the repository
```bash
git clone https://github.com/sukrutan1/Chat-App.git
cd Chat-App
```

### 2. Setup the Backend
Navigate to the backend directory, install dependencies, and setup the environment variables.
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Setup the Frontend
Open a new terminal, navigate to the frontend directory, and install dependencies.
```bash
cd frontend
npm install
```

### 4. Run the Application
You will need to run both the backend and frontend development servers.

**Start the Backend:**
```bash
cd backend
npm run dev
```

**Start the Frontend:**
```bash
cd frontend
npm run dev
```

The frontend will typically run on `http://localhost:5173` and communicate with the backend on `http://localhost:5000`.
