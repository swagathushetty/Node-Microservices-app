const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvents=(type,data)=>{
  if (type === 'PostCreated') {
    const { id, title } = data;
    console.log('21',posts)
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(comment => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
}

app.get('/posts', (req, res) => {
    console.log(posts)
  res.send(posts);
});

app.post('/events', (req, res) => {

  const { type, data } = req.body;

 
  handleEvents(type,data)
  console.log('44',posts);

  res.send({});
});

app.listen(4002, async() => {
  try {
    console.log('Listening on 4002');
    let res=await axios.get('http://event-bus-srv:4005/events')

    for(let event of res.data){
      console.log('processing event ',event.type)
      handleEvents(event.type,event.data)
    }
  } catch (error) {
    console.log(error)
  }
 
});
