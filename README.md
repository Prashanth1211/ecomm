# 🛒 E-Commerce App (React + Context API + Firebase)

A simple e-commerce web application built with **React**, **React Context API** for state management, and **Firebase** for authentication, database, and hosting.  

---

## 🚀 Features
- 🔐 **User Authentication** (Firebase Auth – Google, Email/Password)
- 📦 **Product Management** (Firestore Database)
- 🛍️ **Cart & Checkout** (React Context API for global state)
- 💳 **Payments (Optional)** – Integrate with Stripe / Razorpay
- 📜 **Order History** (Save orders per user in Firestore)
- ⚙️ **Admin Panel (Optional)** – Manage products and orders

---

## 🛠️ Tech Stack
- **Frontend**: React (with Context API for state management)  
- **Backend/Database**: Firebase (Firestore + Auth + Storage)  
- **Hosting**: Firebase Hosting / Vercel / Netlify  

---

## ⚙️ Setup & Installation
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app
Install dependencies

bash
Copy code
npm install
Create a Firebase project at Firebase Console

Enable Authentication (Google/Email)

Enable Firestore Database

Enable Storage

Add your Firebase config to src/firebase.js

javascript
Copy code
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXX"
};
Start the development server

bash
Copy code
npm start
Deploy (Firebase Hosting)

bash
Copy code
npm run build
firebase deploy
