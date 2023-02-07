const Sequelize = require("sequelize")
require('dotenv').config()


const { DATABASE, DATABASE_PASSWORD, DATABASE_USER, DATABASE_HOST } = process.env;

const HistoryModel = require("./models/historys/historys")


const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: "mysql"
});

const History = HistoryModel(sequelize, Sequelize)

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
})

module.exports = {
  History,
}