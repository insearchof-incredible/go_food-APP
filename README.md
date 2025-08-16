# 🍔 GoFood - Food Delivery App

GoFood is a full-stack **food delivery application** where users can browse dishes, add them to their cart, and place orders seamlessly.  
Built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**, it provides a smooth user experience with real-time cart updates and secure authentication.

---

## ✨ Features

- 🛒 **Add to Cart & Manage Items** – Real-time cart updates  
- 🔐 **Authentication** – Secure signup/login with JWT  
- 📱 **Responsive UI** – Works on mobile, tablet, and desktop  
- 🛠 **Admin Dashboard** – Manage menu items and orders  
- 📦 **Order Management** – Track orders from placement to delivery  
- 💾 **Database Integration** – MongoDB for storing users, food items, and orders

---

## 🖥 Tech Stack

### **Frontend (User)**
- React.js
- Context API for state management
- CSS3 for styling
- **Live Link:** [GoFood User Frontend](https://go-food-user.netlify.app/)

### **Admin Panel**
- React.js (separate admin interface)
- Manage products, view orders
- **Live Link:** [GoFood Admin Panel](https://go-food-admin.vercel.app/)

### **Backend**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- Multer for file uploads
- **Live Link:** [GoFood Backend API](https://go-food-app-backend-2.onrender.com)

---

## 📂 Project Structure

GoFood-FullStack/
│
├─ frontend/ # User interface
├─ admin/ # Admin dashboard
├─ backend/ # Backend API
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ middleware/
│ ├─ uploads/
│ ├─ config/
│ └─ server.js


---

## 🚀 Installation & Setup

### 1. Clone Repositories
```bash
git clone https://github.com/yourusername/frontend.git
git clone https://github.com/yourusername/admin.git
git clone https://github.com/yourusername/backend.git


### **Frontend Setup**
cd frontend
npm install
npm run dev

### **Admin Panel Setup**
cd admin
npm install
npm start
