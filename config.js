var loremIpsum = require('lorem-ipsum');
var plantModel = require("./models/plant.js");

function random(max,min) {
  return Math.floor((Math.random() * max) + min);
}

var config = {
    secret:"mccauthsecretoken",
    port: process.env.PORT || '3000',
    createSampleData: function() {
        var pos = [
            {latitude:41.307618,longitude: -95.957025},
            {latitude:41.307441,longitude: -95.957019},
            {latitude:41.307455,longitude: -95.956837},
            {latitude:41.307687,longitude: -95.957065},
            {latitude:41.307652,longitude: -95.957263},
        ]
        
        //Removing all plants from db
        plantModel.find(function(err,docs){
            for(var i in docs){
                var doc = docs[i];
                doc.remove();
            }
        });        
        
        //creating new set of sample plants
        for (var i = 0; i < 5; i++) {
            var plant = new plantModel(createRecord());
            plant.latitude = pos[i].latitude;
            plant.longitude = pos[i].longitude;
            plant.save();
        }

        //Return a random plant
        function createRecord() {
            var data = {
                commonName: loremIpsum({
                    count: random(3,1),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                genus: loremIpsum({
                    count: random(3,1),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                species: loremIpsum({
                    count: random(2,1),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                variety: loremIpsum({
                    count: random(2,1),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                family: loremIpsum({
                    count: random(2,1),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                plantPropagation: loremIpsum({
                    count: random(2,1),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                zoneHardiness:random(100,1),
                exposure: loremIpsum({
                    count: 1,
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                use: loremIpsum({
                    count: random(5,3),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                characteristics: loremIpsum({
                    count: random(3,1),
                    units: 'sentences',
                    sentenceLowerBound: 5,
                    sentenceUpperBound: 15,
                    format: 'plain',
                    random: Math.random
                }),
                insects: loremIpsum({
                    count: random(5,3),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                diseases: loremIpsum({
                    count: 1,
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                classification: loremIpsum({
                    count: 1,
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                campus: loremIpsum({
                    count: 1,
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                height:random(100,0),
                spread:random(100,0),
                flowers: loremIpsum({
                    count: random(3,1),
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
                fruit: loremIpsum({
                    count: 1,
                    units: 'words',
                    format: 'plain',
                    random: Math.random
                }),
            }
            
            return data;
            
        }

    }
}

module.exports = config;