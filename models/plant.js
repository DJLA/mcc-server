var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var PlantSchema = new Schema({
    commonName:  { type: String, default: '' },
    genus : { type: String, default: '' },
    species: { type: String, default: '' },
    variety :{ type: String, default: '' },
    family : { type: String, default: '' },
    plantPropagation : { type: String, default: '' },
    zoneHardiness : { type: Number, default: 0},
    exposure: { type: String, default: '' },
    use : { type: String, default: '' },
    characteristics : { type: String, default: '' },
    insects : { type: String, default: '' },
    diseases : { type: String, default: '' },
    classification : { type: String, default: '' },
    campus : { type: String, default: '' },
    height : { type: Number, default: 0 },
    spread : { type: Number, default: 0 },
    flowers : { type: String, default: '' },
    fruit : { type: String, default: '' },
    latitude:{ type: Number, default: 0 },
    longitude:{ type: Number, default: 0 }
})

module.exports = mongoose.model("Plant",PlantSchema);
