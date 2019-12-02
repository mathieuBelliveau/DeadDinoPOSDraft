var http = require('http');
var sql = require('mysql');
var mariadb = require('mariadb'); //to be used with xampp


var ex = mariadb.createConnection({//connect to existing mariadb host
    host: 'localhost',
    port: '3306',
    database: 'ddg',
    user: 'root',
    password: ''
})
.then( conn => {
    console.log("connection!")
    
})
.catch(err => {
    console.log("nope " + err)
});

async function asyncFunction() {
    let conn;
    try{
        
    }
}