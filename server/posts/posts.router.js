const express = require('express');
const { fetchPosts } = require('./posts.service');
const { fetchUserById } = require('../users/users.service');
const { default: axios } = require('axios');

const router = express.Router();
router.get('/', async (req, res) => {
  const posts = await fetchPosts();
  console.log('params1', req.query);
  const postsWithImages = posts.reduce((acc, post) => {
    // TODO use this route to fetch photos for each post
    // axios.get(`https://jsonplaceholder.typicode.com/albums/${post.id}/photos`);
    return [
      ...acc,
      {
        ...post,
        images: [
          { url: 'https://picsum.photos/200/300' },
          { url: 'https://picsum.photos/200/300' },
          { url: 'https://picsum.photos/200/300' },
        ],
      },
    ];
  }, []);

  res.json(postsWithImages);
});

module.exports = router;
