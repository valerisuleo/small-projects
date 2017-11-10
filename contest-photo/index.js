// 1 require pkg
const express = require('express');
const mysql = require('mysql');


// 4 create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'f10rediloto',
  // 7 comment out for now the db => and check the result in chrome...
  database: 'nodemysql'
});


// 5 connect
db.connect((err) =>{
  if(err){
    throw err;
  }
  console.log('mysql connected');
  // here I get back an error because the db does not exist yet...
});

// 2 create app express
const app = express();

// 6 ...let's create our db! To do that I have to create a route, I can do that in express with the get method
app.get('/createdb', (req, res) => {
  const sql = 'CREATE DATABASE nodemysql';
  // to run it..
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Database created...');
  });
  // it's not actually running because we specified the database above
});

// 8 CREATE TABLE
app.get('/createpostable', (req, res) => {
  const sql = 'CREATE TABLE book(id int AUTO_INCREMENT, title VARCHAR(255), author_id int, genre VARCHAR(20), PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Post table created...');
  });
});

// 3 set the port where is listening
app.listen('4000', () => {
  console.log('server listen on port 4000');
});
