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
    var url = "https://plant-api-abdi0.c9user.io";

    it("should loggin to Active Directory",function(){
        var data = {
            username: 'HORTTEST@mccnet.mccneb.edu',
            password: 'H0rtG3t1n!'
        }
        
        request(url)
            .post("/users/signin")
            .send(data)
            .end(function(err){
                if(err)
                    throw err
                    
            })
    })
    
})