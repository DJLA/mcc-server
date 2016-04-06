var should = require("should");
var request = require('supertest');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var PlantsModel = require("../models/plant.js");
var id = "";
var url = "http://10.11.91.37:3000";
var token = ""

mockgoose(mongoose);

GLOBAL.status = "testing"

var app = require("../bin/www")

describe("Plants Route",function(){
    var url = "http://10.11.91.37:3000";
    
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
    
    
    before(function(done){
        var data = {
            username: 'HORTTEST@mccnet.mccneb.edu',
            password: 'H0rtG3t1n!'
        }
        
        request(url)
            .post("/users/signin")
            .send(data)
            .end(function(err, res) {
                if(err)
                    throw err
                
                res.status.should.equal(200);
                token = res.body.token;
                done();
            })
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
            .post("/plants?token="+token)
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
            .put("/plants/"+id+"?token="+token)
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
            .delete("/plants/"+id+"?token=")
            .send()
            .end(function(err,res){
                if(err)
                    throw err
                
                res.status.should.equal(200);
                done()
            })
    })
})
