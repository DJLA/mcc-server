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
    var url = "http://10.11.91.37:3000";

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
                
                console.log(res.token)
                
                res.status.should.equal(200)
                done()
            })
    })
    
})