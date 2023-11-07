const Sequelize = require("sequelize");
const sequelize = new Sequelize("expensedbs", "root", "ritika91@", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
