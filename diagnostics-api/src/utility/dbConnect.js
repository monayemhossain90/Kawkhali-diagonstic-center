const mongoose = require("mongoose");

let isConnected = false;

const dbConnect = async () => {
    if (isConnected) return;

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        isConnected = db.connections[0].readyState;
        console.log("Database connected");
    } catch (error) {
        console.log("DB connection failed", error);
        throw error;
    }
};

module.exports = dbConnect;