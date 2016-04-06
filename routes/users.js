var express = require("express");
var router = express.Router();
var ActiveDirectory = require('activedirectory');
var appConfig = require("../config.js");
var jwt = require("jsonwebtoken");

router.post("/signin", function(req,res,next) {

    var config = {
        url: 'ldap://mccnet.mccneb.edu',
        baseDN: 'dc=mccnet,dc=mccneb,dc=edu',
        username: req.body.username,
        password: req.body.password
    }

    var ad = new ActiveDirectory(config);
    
    var jwtData = {
        username:config.username
    }

        
    ad.authenticate(config.username, config.password, function(err, auth) {
        if (err) {
            console.log("AD error")
            res.status(400)
            res.send('ERROR: ' + JSON.stringify(err));
            return;
        }

        if (auth) {
            // if user is found and password is right
            // create a token
            var token = jwt.sign(jwtData, appConfig.secret, {
                expiresIn: 1440 // expires in 24 hours
            });

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        }
        else {
            console.log("Auth Failed")
            res.status(400)
            res.send('Authentication failed!');
        }
    });
})

module.exports = router;
