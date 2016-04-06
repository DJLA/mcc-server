var should = require("should");
var request = require('supertest');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var PlantsModel = require("../models/plant.js");
var id = "";

mockgoose(mongoose);

GLOBAL.status = "testing";

var app = require("../bin/www");


describe("Users Route",function(){
    var url = "https://plant-api-abdi07.c9users.io";

    it("should loggin to Active Directory",function(done){
        var data = {
            username: 'HORTTEST@mccnet.mccneb.edu',
            password: 'H0rtG3t1n!'
        }
        
        request(url)
            .post("/users/signin")
            .send(data)
            .end(function(err,res){
                if(err)
                    throw err
                    
                res.status.should.equal(200)
                done()
            })
    })
    
})