var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS cproh CHARACTER SET 'utf8'", function (err, result) {
    if (err) throw err;
    console.log("database created");
  });
  con.query("CREATE TABLE IF NOT EXISTS cproh.users (id INT NOT NULL UNIQUE, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, age INT, companyName VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  // con.query("INSERT INTO cproh.users (id, firstname, lastname, email, age, companyName) VALUES (1,' Flo', 'Con', 'flocon@concon.fr', 32, 'laConConCompany'),(2, 'Val',' Suma', 'catso@gmail.it', 43, 'inculateInc'), (3, 'Mathieu', 'Lefevre', 'levieux@aol.com', 33, 'cplus'), (4, 'Nico', 'Waza', 'nicowaza@gmail.fr', 42, 'simplon')", function (err, result) {
  //   if (err) throw err;
  //   console.log("records inserted");
  // });
  con.query("SELECT email FROM cproh.users ORDER BY age", function (err, result) {
    if (err) throw err;
    console.log("mail list: ", JSON.stringify(result));
  });
});