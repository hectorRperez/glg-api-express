
/**
@file Modulo principal de rutas de la aplicación
@author hector
*/

/**
 * @desc Este módulo se encarga de gestionar las rutas de la aplicación. 
 * Incluye el uso del módulo de rutas de historias en el endpoint "/historys".
 * Al exportar el router principal, se permitirá su uso en otras partes de la aplicación.
 */

const router = require("express").Router();


/**
Importación del módulo de rutas de historias
*/
const apiHistotysRouter = require("./api/historys");

/**
Uso del módulo de rutas de historias en el endpoint "/historys"
*/
router.use("/historys", apiHistotysRouter);


module.exports = router;