const router = require("express").Router();

const apiHistotysRouter = require("./api/historys");

router.use("/historys", apiHistotysRouter);


module.exports = router;