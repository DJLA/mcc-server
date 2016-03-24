var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var PlantSchema = new Schema({
    commonName: String,
    genus : String,
    species: String,
    variety :String,
    family : String,
    plantPropagation : String,
    zoneHardiness : Number,
    exposure: String,
    use : String,
    characteristics : String,
    insects : String,
    diseases : String,
    classification : String,
    campus : String,
    height : Number,
    spread : Number,
    flowers : String,
    fruit : String
})

module.exports = mongoose.model("Plant",PlantSchema);