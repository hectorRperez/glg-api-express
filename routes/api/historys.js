/**
@file Este archivo contiene la implementación de la lógica de la ruta de historial.
@author Hector.
*/

const router = require("express").Router();
const { History } = require("../../db")
const sendEmail = require("../../services/sendgrid")


/**
@function
@param {express.Request} req - La solicitud HTTP.
@param {express.Response} res - La respuesta HTTP.
@description Este endpoint devuelve todos los registros de historial. 
*/
router.get("/", async (req, res) => {
  const historys = await History.findAll();
  res.json(historys)
})

/**
@function
@param {express.Request} req - La solicitud HTTP. 
@param {express.Response} res - La respuesta HTTP.
@description Este endpoint crea un nuevo registro de historial con los datos enviados en el cuerpo de la solicitud.
*/
router.post("/", async (req, res) => {
  const history = await History.create(req.body);
  sendEmail(history)
  res.json({ success: "Se ha registrado correctamente la cotización" })
})

module.exports = router;