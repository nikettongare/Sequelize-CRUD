const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

module.exports = sequelize.define("user", {
  uid: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(50),
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: "2017-06-15",
  },
  data: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});
