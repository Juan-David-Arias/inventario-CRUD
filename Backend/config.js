require('dotenv').config();

const config = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/inventarios',
  port: process.env.PORT || 3001
};

module.exports = config;
