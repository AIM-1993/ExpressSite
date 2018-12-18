var express = require('express');
var router = express.Router();
var connection = require('../db/video_connection');

var db_data = '';
// connecting database
connection.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Video connect success');
});


connection.query('SELECT * FROM `videotable`', function (error, results, fields) {
  if (error) throw error;
  db_data = results;
  console.log(db_data);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({result: db_data});
  console.log("Query video success...");
});


connection.end();
module.exports = router;