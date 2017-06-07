// 1a require express
const express = require('express');

///////////////////////////// MONGOOSE & BLUEBIRD /////////////////////////////

// mongoose 1a
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//////////////////////////////////// EXPRESS ///////////////////////////////////

// 3a require morgan
const morgan = require('morgan');

// 1b invocate express
const app = express();

// 4 set the views directory
app.set('views', `${__dirname}/views`);

// 5 set up public folder to serve static file
app.use(express.static(`${__dirname}/public`));

// 6 let's express templating languge
app.set('view engine', 'ejs');

// 3b add middleware
app.use(morgan('dev'));

// 2 assign the port
app.listen(3000, ()=> console.log('Express is running on 3000...'));

//////////////////////////////// EXPRESS LAYOUT ///////////////////////////////

var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
// copy and paste index ejs into layout.ejs

///////////////////////////// MONGOOSE & BLUEBIRD //////////////////////////////

// mongoose 1b connect mongoose to the database
const databaseURI = 'mongodb://localhost/express-app-data-seed';
mongoose.connect(databaseURI);

// mongoose 2 --> singer.js

// mongoose 3 connecting the models
const Guitar = require('./models/guitar');
const Singer = require('./models/singer');

//////////////////////////////////// ROUTES ////////////////////////////////////

// HOME
app.get('/', (req, res) => {
  Guitar
    .find()
    .exec()
    .then((chitarre) => {
      res.render('guitars', { chitarre });
    });
});

// SINGER
app.get('/singers', (req, res) => {
  Singer
    .find()
    .exec() // when we use query with promises we always use exec()
    .then((cantanti) => { // whatever it comes back from our get request - which it should be an array of objects - we pass into the { cantanti } in order to render it.
      res.render('singers', { cantanti });
    });
});

// GUITAR
app.get('/guitars', (req, res) => {
  Guitar
    .find()
    .exec()
    .then((chitarre) => {
      res.render('guitars', { chitarre });
    });
});

// CONTACT
app.get('/contact', (req, res) =>{
  res.render('contact');
});

// ERROR
app.get('*', (req, res) =>{
  res.render('404');
});
