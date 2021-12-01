//getting external module mysql
var mysql = require('mysql');
//create connection with mysql
var con = mysql.createConnection({
    host: "localhost",    // ip address of server running mysql
    user: "root",    // user name to your mysql database
    password: "password",    // corresponding password
    database: "payroll"  // use this database to querying context
  });

//query
  con.query("SELECT id,name FROM payroll.employee", function (err, result, fields) {
	// if any error while executing above query, throw error
	if (err) throw err;
	// if there is no error, you have the result
	console.log(result);
});
