// 1 require pkg
const express = require('express');
const mysql = require('mysql');
const hyena = require('hyena');

// 4 create connection
const databaseSQL = mysql.createConnection({
  host: 'localhost',
  user: 'codetest',
  password: 'f10rediluna',
  database: 'nodemysql'
});

// 6 connect hyena to databaseSQL
hyena.connect('mysql://user:password@localhost/database');

// 5 check connection
databaseSQL.connect((err) =>{
  if(err){
    throw err;
  }
  console.log('Hey! mysql is connect!');
  // here I get back an error because the databaseSQL does not exist yet...
});

// 2 create app express
const app = express();


// 3 set the port where is listening
app.listen('4000', () => {
  console.log('server listen on port 4000');
});

// 7 --> user.js
// 8
const User = require('./models/user');

User.create({
  firsName: 'emily',
  lastName: 'isacky',
  email: 'emily@ga.com'
}, (err, user) => {
  if(err) return console.log(err);
  console.log(user);
});
