const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const routes = require('./config/routes');



app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

app.use(routes);

app.listen('3000', () => console.log('Express started on port 3000'));



// const Article = connection.define('article', {
//   title: Sequelize.STRING,
//   body: Sequelize.TEXT
// });

// CREATE TABLE
// connection.sync().then(() => {
//   Article.create({
//     title: 'coddios',
//     body: 'wowowowowowowowowowowow'
//   });
// });



// find the Article
// connection.sync().then(() => {
//   Article.findById(1).then((article) =>{
//     console.log(article.dataValues);
//   });
// });



// find all Articles
// connection.sync().then(() => {
//   Article.findAll().then((articles) => {
//     console.log(articles.length);
//   });
// });
