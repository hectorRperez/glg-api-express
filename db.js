
/**
Este archivo contiene la configuración de la conexión a la base de datos y la importación y sincronización de los modelos de la tabla History.
@author [nombre del autor]
*/

const Sequelize = require("sequelize")

// Importa la librería dotenv para leer las variables de entorno
require('dotenv').config()

// Asigna las variables de entorno necesarias para la conexión a la base de datos
const { DATABASE, DATABASE_PASSWORD, DATABASE_USER, DATABASE_HOST } = process.env;

// Importa el modelo de la tabla History
const HistoryModel = require("./models/historys/historys")

// Crea una nueva instancia de Sequelize y establece la conexión a la base de datos
const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: "mysql"
});

//Crea una nueva instancia de del modelo `History`
const History = HistoryModel(sequelize, Sequelize)

//Sincroniza los modelos con las bases de datos 
sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
})


//Exporta los modelos
module.exports = {
  History,
}