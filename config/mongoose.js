const mongoose = require('mongoose');
const db = mongoose.connection;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URL)

process.env.PORT

db.on("error", () => console.log("mongo DB is error!"));
db.once("open", () => console.log("mongo DB is connected!"));

module.exports = db;