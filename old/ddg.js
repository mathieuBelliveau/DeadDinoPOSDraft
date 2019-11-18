var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var formidable = require('formidable');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "root",
	database: "ddg",
	password: ""
});

connection.connect(function(err) {
	if(err) console.log("oh no");
	console.log("Connected!");
	connection.query("select * from users", function(err,res,fields){
		console.log(fields[0].name);
		if(err)throw err;
	})
	connection.end();
});


/*http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);*/


/*http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc(data));
    return res.end();
  });
}).listen(8080);*/