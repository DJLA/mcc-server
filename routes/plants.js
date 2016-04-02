var express = require('express');
var router = express.Router();
var plantController = require("../controllers/plants.js")
/* GET home page. */
router.route("/")
  .get(plantController.getPlants)
  .post(plantController.addPlant)


router.route("/:plantId")
  .get(plantController.getOnePlant)
  .delete(plantController.deletePlant)
  .put(plantController.updatePlant)

module.exports = router;
