// import express from 'express'
// import dotenv from 'dotenv'
// import connectDB from './config/db.js';
// import cookieParser from 'cookie-parser';
// import authRoutes from './routes/authRoutes.js';
// dotenv.config()
// let port=8000;
// let app=express();

// app.use(express.json())
// app.use(cookieParser())
// app.use("/api/auth",authRoutes)
// app.get("/", (req, res) => {
//   res.send("Server is running 🚀");
// });
// connectDB()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log("DB connection failed ❌", err);
//   });


import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // ✅ ADD THIS
import authRoutes from './routes/authRoutes.js';
import claimRoutes from "./routes/claimRoutes.js";
import userRoutes from "./routes/userRoutes.js";



dotenv.config()

const allowedOrigins = [
  /^http:\/\/localhost:\d+$/,
  /^https:\/\/.*\.vercel\.app$/,
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

let port = process.env.PORT || 8000;
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      const isAllowed = allowedOrigins.some((rule) =>
        rule instanceof RegExp ? rule.test(origin) : rule === origin
      );

      if (isAllowed) {
        return callback(null, true);
      }

      return callback(new Error("CORS blocked for this origin"));
    },
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api", claimRoutes);
app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed ❌", err);
  });
