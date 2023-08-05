var createError = require('http-errors');
var express = require('express');
var path = require('path');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "jh",
  password: "0000"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Result: " + result);
  // });
});

var app = express();

var nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html', {
      username: "jh"
    });
});

module.exports = app;
