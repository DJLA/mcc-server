var loremIpsum = require('lorem-ipsum');
var plantModel = require("./models/plant.js");

function random(max,min) {
  return Math.floor((Math.random() * max) + min);
}

var config = {
    port: process.env.PORT || '3000',
    createSampleData: function() {
        
        //Removing all plants from db
        plantModel.find(function(err,docs){
            for(var i in docs){
                var doc = docs[i];
                doc.remove();
            }
        });        
        
        //creating new set of sample plants
        for (var i = 0; i < 15; i++) {
            var plant = new plantModel(createRecord());
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
                charateristcs: loremIpsum({
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