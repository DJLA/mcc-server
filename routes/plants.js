var express = require('express');
var router = express.Router();
var plantController = require("../controllers/plants.js")
var auth = require("../middleware/auth.js");

/* GET home page. */
router.route("/")
  .get(authplantController.getPlants)
  .post(auth,plantController.addPlant)


router.route("/:plantId")
  .get(plantController.getOnePlant)
  .delete(auth,plantController.deletePlant)
  .put(auth,plantController.updatePlant)

module.exports = router;
