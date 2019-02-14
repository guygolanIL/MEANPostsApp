const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added'
  });
});

app.get('/api/posts' ,(req, res, next) => {
  const posts = [
    {id: '12312asdas',title: 'titleasdas', content: 'contentasdasd'},
    {id: 'idasda',title: 'titleddd1231asdas', content: 'contentasdas123123d'},
  ];
  res.status(200).json({
    message: 'Posts fetched!',
    posts: posts
  });
});


module.exports = app;
