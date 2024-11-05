import mongoose from "mongoose";

export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO DB connected")
    } catch (error) {
        console.log("error connecting to MONGO DB", error.message);
    }
}