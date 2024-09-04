const mongoose = require("mongoose");
require("dotenv").config();
const {MONGO_URI} = process.env;

const dbConnection = async () => {
    try {
        await mongoose.connect(
            `${MONGO_URI}`
        );
        console.log("Database Connection Successful")
    } catch (error) {
    throw new Error(error);
    }
};

module.exports = dbConnection