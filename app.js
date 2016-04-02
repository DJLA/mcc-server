var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose")
var chalk = require("chalk")
var config = require("./config.js")

//Importing routes module
var plantsRoutes = require('./routes/plants');
var userRoutes = require("./routes/users.js");
var app = express();


//Enabling cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if(GLOBAL.status != "testing")
  app.use(logger('dev'));
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mongo Database

  mongoose.connect('mongodb://localhost/plants')

var db = mongoose.connection;

db.on('error',function(err){
    if(GLOBAL.status != "testing")
        console.log(chalk.red(err))
});
db.once('open', function() {
    if(GLOBAL.status != "testing")
        console.log(chalk.yellow("Connected to database"))
});


//Creating sample data for routes to use
config.createSampleData();
app.set('secret', config.secret); // secret variable

//Routes
app.use('/plants', plantsRoutes);
app.use("/users",userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
