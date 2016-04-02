var express = require('express');
var router = express.Router();
var plantController = require("../controllers/plants.js")
var auth = require("../middleware/auth.js");

/* GET home page. */
router.route("/")
  .get(auth,plantController.getPlants)
  .post(auth,plantController.addPlant)


router.route("/:plantId")
  .get(plantController.getOnePlant)
  .delete(plantController.deletePlant)
  .put(plantController.updatePlant)

module.exports = router;
