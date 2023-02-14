
/**
Definición del modelo de Historias para la base de datos usando Sequelize.
@param {object} sequelize - Instancia de Sequelize.
@param {object} type - Dependencia de Sequelize para definir el tipo de datos de cada columna en la tabla.
@return {object} - Retorna un objeto Sequelize con la definición del modelo de Historias.
*/

module.exports = (sequelize, type) => {
  return sequelize.define("historys", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
    phone: type.STRING,
    email: type.STRING,
    companyName: type.STRING,
    shippingFrom: type.STRING,
    shippingTo: type.STRING,
    service: type.STRING,
    anythingElse: type.STRING
  });
}