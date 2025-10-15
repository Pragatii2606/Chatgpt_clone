

const { configDotenv } = require("dotenv");
const mongoose = require("mongoose");
 // ✅ Load .env variables here

console.log("MONGO_URI:", process.env.MONGO_URI); // ✅ Optional debug log

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = connectDB;
