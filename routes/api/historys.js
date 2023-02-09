const router = require("express").Router();

const { History } = require("../../db")

const sendEmail = require("../../services/sendgrid")

router.get("/", async (req, res) => {
  const historys = await History.findAll();
  res.json(historys)
})

router.post("/", async (req, res) => {
  const history = await History.create(req.body);
  sendEmail(history)
  res.json({ success: "Se ha registrado correctamente la cotización" })
})

module.exports = router;