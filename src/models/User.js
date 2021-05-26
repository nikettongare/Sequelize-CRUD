const Sequelize = require("sequelize");
const sequelize = require("../Utils/database");

module.exports = sequelize.define("user", {
  uid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  username: {
    type: Sequelize.STRING(50),
  },

  isActive: {
    type: Sequelize.BOOLEAN,
  },

  date: {
    type: Sequelize.DATE,
  },

  data: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});
