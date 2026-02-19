// sthamilan0000_db_user
// Milanstha10

const mongoose = require("mongoose");
const DB_URL = "mongodb+srv://sthamilan0000_db_user:Milanstha10@backend.tehruof.mongodb.net/?appName=Backend"

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        mongoose.set("strictQuery", false);
        
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
}

module.exports = connectDB;