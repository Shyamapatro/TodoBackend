const Sequelize = require("sequelize");
require("dotenv").config();

var sequelize = new Sequelize(
  'todo',
  'root',
  '5858',
  {
  host:'localhost',
  //  "localhost",
  dialect: "mysql",
  logging: false,
});

var connectDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      sequelize.sync({ alter: false });
      console.log("Connected Successfully");
    })
    .catch((err) => {
      console.log("Sequelize Connection Error:  ", err);
    });
};

module.exports = {
  sequelize: sequelize,
  connectDB: connectDB,
};
