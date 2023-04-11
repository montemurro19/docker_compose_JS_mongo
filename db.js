const mongoose = require('mongoose');

const connectDb = () => {
  return mongoose.connect('mongodb://mongo:27017/docker-node-mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;