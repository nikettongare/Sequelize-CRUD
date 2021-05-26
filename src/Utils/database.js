const Sequelize = require("sequelize");

module.exports = new Sequelize("demo", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});
