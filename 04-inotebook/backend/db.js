// connect with mongo

const mongoose = require("mongoose");
// import mongoose from "mongoose";
const mongooseURI = "mongodb://localhost:27017";

const connectToMongo = () => {
  mongoose.connect(mongooseURI, () => {
    console.log("Connected with mongo successfully.");
  });
};

module.exports = connectToMongo;
