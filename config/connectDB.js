const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to db");
    } catch (err) {
        console.log(err);
        console.log(err.message);
    }
};

module.exports = connectDB;
