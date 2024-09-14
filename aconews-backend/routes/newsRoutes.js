const express = require('express');
const { getNews, getTopHeadlines } = require('../controllers/newsController');
const router = express.Router();

// Route for top headlines
router.get('/top-headlines', getTopHeadlines);

// Route for search functionality
router.get('/', getNews);

module.exports = router;
