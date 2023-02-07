const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const apiRouter = require("./routes/api")

const app = express();

require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

//Todas las peticiones del cliente con
// /api envialo a fichero apiRouter
app.use("/api", apiRouter)

console.log("hola");

app.listen(3000, () => {
  console.log("server run on port 3000");
})