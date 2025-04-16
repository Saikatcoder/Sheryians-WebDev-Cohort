# 📦 Fullstack Application

A basic fullstack setup using **Node.js**, **Express**, **MongoDB**, and **Mongoose**, with environment variables managed using **dotenv**.

---

## 📁 Project Folder Structure

```
project-folder/
│
├── index.js            # Entry point of the application
├── .env                # Environment variables
├── README.md           # Project documentation (this file)
│
├── /routes             # Folder for route files
├── /utils
│   └── db.js           # For MongoDB connection
```

---

## ⚙️ Tech Stack & Packages

### ✅ Express

To install Express:

```bash
npm install express
```

---

### ✅ dotenv

To manage environment variables:

```bash
npm install dotenv
```

> Create a `.env` file at the root and store secrets like `MONGODB_URL` there.

---

### ✅ Mongoose

To connect and interact with MongoDB:

```bash
npm install mongoose
```

---

### ✅ Cors

To handle cross-origin requests:

```bash
npm install cors
```

Use it in your app:

```js
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
```

---

## 🌐 URL Encoding Middleware

To parse incoming form data:

```js
app.use(express.urlencoded({ extended: true }));
```

---

## 🔌 Database Connection

Create a `utils/db.js` file to handle MongoDB Atlas connection:

```js
import mongoose from 'mongoose';

const db = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log("Error connecting to MongoDB:", err);
        });
};

export default db;
```

---

## 🔐 MongoDB Atlas Setup Tips

- Make sure to **whitelist your IP** in the *Network Access* section.
- Replace `<password>` and DB name properly in your MongoDB URI stored in `.env`.

---

## 🚀 Progress So Far

- ✅ Project initialized
- ✅ Express server created
- ✅ MongoDB connection setup using Mongoose
- ✅ Environment config using dotenv
- ✅ CORS and URL encoding middleware added
- ✅ Basic folder structure ready

---

## 🔜 Next Goals



---

## 🧑‍💻 Author

Made with ❤️ by [SaikatDutta]