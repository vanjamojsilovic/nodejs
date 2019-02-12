var express = require('express');
var mysql = require('mysql');
var app = express();





var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "agencija"
});


app.use(express.static('public'));



app.get('/', function (req, res) {
    
    con.connect(function(err) {
       
       
        con.query("SELECT id_zaposleni, ime FROM zaposleni LIMIT 10", function (err, result, fields) {
            if (err) throw err;            
            console.log(result);
            res.send(result);
        });
    }); 
    
    
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})