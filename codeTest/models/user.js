const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { sequelize } = require('../config/environment');
// const Image = require('./image');

// setup User model and its fields.
const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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

const Image = sequelize.define('image', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  caption: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Image.belongsTo(User, { foreignKey: 'userId' });

// create all the defined tables in the specified database.
sequelize.sync({ force: true })
    .then(() => console.log('users and users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));
//
// export User model for use in other files.
module.exports = User;
