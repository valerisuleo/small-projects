// 1 requiere pkg. WE DO NOT HAVE A SERVER.JS FILE ANYMORE. WE SET THE EXPRESS API INSIDE THE INDEX.JS
const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');

mongoose.plugin(require('./lib/globalToJSON'));

const { port, env, dbURI } = require('./config/environment');

// 10a require routes
const routes = require('./config/routes');

// 12a require errorHandler and customResponses
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');

// 13a SET THE FUCKING PUBLIC FOLDER!!!
const dest = `${__dirname}/public`;

// 2 connect our db
mongoose.connect(dbURI);

// 3 create an express app
const app = express();

if(env !== 'test') app.use(morgan('dev'));

// 13c SET THE FUCKING PUBLIC FOLDER!!!
app.use(express.static(dest));

// 4 setup bodyParser to use json
app.use(bodyParser.json());

// 10b require routes
app.use('/api', routes);

// 13b SET THE FUCKING PUBLIC FOLDER!!!
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

// 12b require errorHandler and customResponses
app.use(customResponses);
app.use(errorHandler);

// 5 assing port
app.listen(port, () => console.log(`Express has started on port: ${port}`));

// 6 run nodemon and check problems fo far
// 7 mkdir models && touch models/wonder.js

//11 mkdir lib && touch lib/errorHandler.js
