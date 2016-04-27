var plantModel = require("../models/plant.js");

//Add plant
exports.addPlant = function(req, res, next) {
    plantModel.create(req.body, function(err, plant) {
        if (err)
            return next(err);
        else{
            plant.heights.push(req.body.height);
            plant.save();
            res.json({
                message: "Created plant",
                plant: plant
            });
        }
    })
}

//Get all plants
exports.getPlants = function(req, res, next) {
    plantModel.find(function(err, plants) {
        if (err)
            return next(err)
        else
            res.json({
                plants:plants
            })
    })
}

//Get a specific plant
exports.getOnePlant = function(req, res, next) {
    plantModel.findById(req.params.plantId, function(err, plant) {
        if (err)
            return next(err)
        else
            res.json({
                plant:plant
            });
    })
}

//Delete a specific plant
exports.deletePlant = function(req, res, next) {
    plantModel.remove({
        _id: req.params.plantId
    }, function(err, plant) {
        if (err)
            return next(err);
        else
            res.json({
                message: "Deleted plant"
            })
    })
}

//Update a specific plant
exports.updatePlant = function(req, res, next) {
    plantModel.findById(req.params.plantId, function(err, plant) {
        if (err)
            return next(err)
        else{
            plant.heights.push(req.body.height);
            plant.save();
            res.json({
                plant:plant
            });            
        }
    })    
    
    plantModel.findByIdAndUpdate(req.params.plantId, req.body, function(err, plant) {
        if (err)
            return next(err)
        else
            res.json({
                message:"updated plant id: " + req.params.plantId
            });
    })
}
