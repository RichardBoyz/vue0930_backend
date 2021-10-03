const express = require('express');
const mongoose = require('mongoose');

const PostModel = require('../model/posts');
const router = express.Router();

router.post('/', async (req, res) => {
  let post = {};
  post.title = req.body.title;
  post.text = req.body.text;
  post.createdAt = new Date();
  let newPost = new PostModel(post);
  await newPost.save();
  res.send({data:post});
});

router.get('/getPosts', async (req, res) => {
  let allPosts = await PostModel.find({}).lean();
  res.send({ data: allPosts });
})

module.exports = router;