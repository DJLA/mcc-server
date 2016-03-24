var should = require("should");
var request = require('supertest');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var PlantsModel = require("../models/plant.js");
var plantController = require("../controllers/plants.js");
var id = "";
var url = ""

mockgoose(mongoose);
GLOBAL.status = "testing"

var app = require("../bin/www")

describe("Plants Controller",function(){
    before(function(done){
        
        var data = {
            commonName:"test",
            species: "test"
        }
        var plant = new PlantsModel(data);
        plant.save()
        
        id = plant.id;
        
        done()
    })
    
    it("should get plants from db",function(done){
        var req = {
            method:"GET",
        }
        var res = {
            json:function(obj){
                obj.plants.should.be.an.Array();
                obj.should.have.property("plants");
                done()
            }
        }
        
        plantController.getPlants(req,res,function(err){
            if(err)
                throw err
        })
        
    })
    
    it("should get a single plants",function(done){
        var req = {
            method:"GET",
            params:{
                plantId:id
            }
        }
        var res = {
            json:function(obj){
                obj.plant.should.be.an.Object();
                obj.should.have.property("plant");
                done()
            }
        }
        
        plantController.getOnePlant(req,res,function(err){
            if(err)
                throw err
        })
    })
    
    it("should a plant to the db",function(done){
        var data = {
            commonName: "Test",
            genus : "Test",
            species: "Test",
            variety :"Test",
            family : "Test",
            plantPropagation : "Test",
            zoneHardiness : 0,
            exposure: "Test",
            use : "Test",
            charateristcs : "Test",
            insects : "Test",
            diseases : "Test",
            classification : "Test",
            campus : "Test",
            height : 0,
            spread : 0,
            flowers : "Test",
            fruit : "Test"
        }
        
        var req = {
            method:"POST",
            body:data
        }
        
        var res = {
            json:function(obj){
                obj.should.have.property("plant");
                obj.should.have.property("message");
                obj.plant.should.be.an.Object();
                obj.message.should.be.an.String();
                done()
            }
        }
        
        plantController.addPlant(req,res,function(err){
            if(err)
                throw err;
        })
        
    })
    
    it("should update a single plant",function(done){
        
        var data = {
            commonName: "Updated",
            genus : "Updated",
            species: "Updated",
            variety :"Updated",
            family : "Updated",
            plantPropagation : "Updated",
            zoneHardiness : 0,
            exposure: "Updated",
            use : "Updated",
            charateristcs : "Updated",
            insects : "Updated",
            diseases : "Updated",
            classification : "Updated",
            campus : "Updated",
            height : 0,
            spread : 0,
            flowers : "Updated",
            fruit : "Updated"
        }
        
        var req = {
            method:"PUT",
            body:data,
            params:{
                plantId:id
            }
        }
        
        var res = {
            json:function(obj){
                obj.should.have.property("message");
                obj.message.should.be.an.String();
                done()
            }
        }
        
        plantController.updatePlant(req,res,function(err){
            if(err)
                throw err;
        })
                
    })
    
    it("should delete a plant",function(done) {
        var req = {
            method:"DELETE",
            params:{
                plantId:id
            }
        }
        
        var res = {
            json:function(obj){
                obj.should.have.property("message");
                obj.message.should.be.an.String();
                done()
            }
        }
        
        plantController.deletePlant(req,res,function(err){
            if(err)
                throw err;
        })        
    })    
    
})