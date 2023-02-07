const router = require("express").Router();

const { History } = require("../../db")

router.get("/", async (req, res) => {
  const historys = await History.findAll();
  res.json(historys);
})

router.post("/", async (req, res) => {
  console.log(req.body);
  const history = await History.create(req.body);
  res.json({ success: "Se ha registrado correctamente la cotización" })
})

module.exports = router;