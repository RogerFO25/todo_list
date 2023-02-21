const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost/todo-list')

db.on("error", () => console.log("mongo DB is error!"));
db.once("open", () => console.log("mongo DB is connected!"));

module.exports = db;