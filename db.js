const mongoose = require('mongoose');
const DB = 'mongodb://mongo:27017/docker-node-mongo';

const connectDb = () => {
  return mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;