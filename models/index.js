var Sequelize = require("sequelize");
var sequelize = require("../dbConnection").sequelize;
module.exports = {
    todo: require("./todo")(Sequelize, sequelize, Sequelize.DataTypes),
    
};
