const mongoose = require('mongoose');

const uri = "mongodb+srv://richard:r54321@cluster0.ngawj.mongodb.net/myData?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('db connected');
};

module.exports = connectDB;