const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const posts = new mongoose.Schema({
  title: {
    type:String
  },
  text: {
    type:String
  },
  createdAt: {
    type:Date
  }
})
const PostModel = mongoose.model('posts', posts);

exports.createPost = async function () {
  try{const posts = await PostModel.insertOne({
    title: req.body.title,
    text: req.body.text,
    createdAt: new Date()
  });
    res.send({ errorCode: 0 });
  } catch {
    res.send({ errorCode: -1 });
  }
}

module.exports = PostModel;