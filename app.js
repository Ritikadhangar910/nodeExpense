const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const expenseRouter = require("./Routes/expense");
const cors = require("cors");
app.use(cors());
app.use(bodyparser.json({ extended: false }));

app.use("/expense", expenseRouter);
sequelize
  .sync()
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
