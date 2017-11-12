const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

// create a sequelize instance with our local postgres database information.
const sequelize  = new Sequelize('nodemysql', 'codetest', 'f10rediluna', {
  host: 'localhost',
  dialect: 'mysql'
});
// setup User model and its fields.
const User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
    }
  }
});

User.prototype.validPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = User;
