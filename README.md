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
- **Framework**: React (Bootstrapped with Vite)
- **State Management**: Zustand
- **Styling**: TailwindCSS & DaisyUI
- **Routing**: React Router DOM
- **Real-Time Communication**: Socket.io-client
- **HTTP Client**: Axios
- **Icons & Notifications**: Lucide React, React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ORM
- **Real-Time Communication**: Socket.io
- **Authentication**: JWT & Cookie Parser
- **Image Storage**: Cloudinary

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
git clone https://github.com/your-username/chat-app.git
cd chat-app
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
*(Optional)* If you have environment variables for the frontend, create a `.env` file in the `frontend` directory based on `.env.example`.

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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the [ISC License](LICENSE).
