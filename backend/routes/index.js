var express = require('express');
var router = express.Router();
var connection = require('../db/connection');

var db_data = [];
// connecting database
connection.connect(function(err) {
  if (err) {
      console.log(err);
      return;
  }
  console.log('Connect success');
});


connection.query('SELECT * FROM `testuser`', function (error, results, fields) {
  if (error) throw error;
  db_data = results;
  console.log("Query Success...")
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({result: db_data});
});


connection.end();
module.exports = router;
