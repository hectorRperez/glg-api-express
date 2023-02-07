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