const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


const app = express();
const routes = require("./routes");
const port = process.env.PORT ?? 3000;
// 1. mongoose.js 沒有匯出任何東西
// 2. app.js 也不需要「再次」引用 mongoose.js 檔案
// 3. 只需要在執行時，有跑這段就好。
require('./config/mongoose');

const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
