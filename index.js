var mysql =  require('node-mysql');
var connection =  mysql.createConnection({
  host : “localhost”,
  user : “root”,
  password: “”
});
connection.connect();
var sql_stmt = 'SELECT user FROM `users`'; connection.query(sql_stmt, function(e, rows, f) {
if (!e) {
for (var r=0; r < rows.length; ++r) {
var row = rows[r];
var user = row['first_name']; console.log(user);
} }
});
