import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import path from "path";
import session from "express-session";

import "./passport/github.auth.js";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT= process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(session({secret:"keyboard dog" , resave:false, saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));

})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectMongoDB();
})