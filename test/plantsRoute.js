var should = require("should");
var request = require('supertest');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var PlantsModel = require("../models/plant.js");
var id = "";

mockgoose(mongoose);

GLOBAL.status = "testing"

var app = require("../bin/www")

describe("Plants Route",function(){
    var url = 'https://plant-api-abdi07.c9users.io';
    
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
    
    it("should return all of the plants",function(done){
        request(url)
            .get("/plants")
            .send()
            .end(function(err,res){
                if(err)
                    throw err
                
                res.status.should.equal(200);
                done();
            })
    })
    
    it("should return a single plant",function(done){
        request(url)
            .get("/plants/"+id)
            .send()
            .end(function(err,res){
                if(err)
                    throw err
                
                res.status.should.equal(200);
                done()
            })
    })
    it("should a plant",function(done){
        request(url)
            .post("/plants")
            .send()
            .end(function(err,res){
                if(err)
                    throw err
                
                res.status.should.equal(200);
                done()
            })        
    })
    it("should update a single plant",function(done){
        request(url)
            .put("/plants/"+id)
            .send()
            .end(function(err,res){
                if(err)
                    throw err
                res.status.should.equal(200)
                done()
            })
    })
    it("should delete a single plant",function(done){
        request(url)
            .delete("/plants/"+id)
            .send()
            .end(function(err,res){
                if(err)
                    throw err
                
                res.status.should.equal(200);
                done()
            })
    })
})
