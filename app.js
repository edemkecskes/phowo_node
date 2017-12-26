var express    = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql://mysql:3306/',
  user     : 'adam',
  password : 'mThPxH6UJ',
  database : 'phowo'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");
} else {
    console.log("Error connecting database ...");
}
});

app.get("/",function(req,res){
/*connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });*/
  console.log("success!");
  res.send('Hello World!');
});

app.listen(3000);
