// 1 require express
const express = require('express');
const morgan = require('morgan');

// 2 we need to invocate express()
const app = express();

// 6 set the views directory
app.set('views', `${__dirname}/views`);

// 8 set up public folder to serve static file
app.use(express.static(`${__dirname}/public`));


// 7 let's express templating languge
app.set('view engine', 'ejs');

// 5 morgan
app.use(morgan('dev'));

/////////////////////////////////////ROUTES/////////////////////////////////////

// HOME
app.get('/', (req, res) => {
  res.render('index');
});

// ABOUT
app.get('/about', (req, res) =>{
  res.render('about');
});

// CONTACT
app.get('/contact', (req, res) =>{
  res.render('contact');
});

// PROJECT
app.get('/project', (req, res) =>{
  res.render('project');
});

// ERROR
app.get('*', (req, res) =>{
  res.end('404 Error');
});


// 4 We assigm the port where it should run
app.listen(3000, ()=> console.log('I am running on 3000...'));
