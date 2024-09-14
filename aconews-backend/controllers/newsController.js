// const axios = require('axios');
// const dotenv = require('dotenv');
// dotenv.config();

// // Fetch news articles from gnews API
// const getNews = async (req, res) => {
//   try {
//     const { page = 1, query = '', country = '', category = '' } = req.query;
//     const pageSize = 10;
//     const apiKey = process.env.GNEWS_API_KEY;

//     // https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=5325cc56177f13f25db059ed430690a8
//     const apiURL = `https://gnews.io/api/v4/search?q=${query}&country=${country}&category=${category}&page=${page}&max=${pageSize}&apikey=${apiKey}`;
//     // const apiURL = `https://gnews.io/api/v4/top-headlines?category=general&apikey=${apiKey}`;
//     // https://gnews.io/api/v4/top-headlines?category=general&apikey=5325cc56177f13f25db059ed430690a8


//     const response = await axios.get(apiURL);

//     if (response.status !== 200) {
//         return res.status(response.status).json({ message: 'Error from gnews API' });
//     }

//     const news = response.data;

//     res.json(news);
//   } catch (error) {
//     console.error('Error fetching news from gnews at newscontroller backend:', error);
//     res.status(500).json({ message: 'Error fetching news' });
//   }
// };

// module.exports = { getNews };


const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const getTopHeadlines = async (req, res) => {
  try {
    const apiKey = process.env.GNEWS_API_KEY;
    const apiURL = `https://gnews.io/api/v4/top-headlines?category=general&apikey=${apiKey}`;
    
    const response = await axios.get(apiURL);

    if (response.status !== 200) {
      return res.status(response.status).json({ message: 'Error from gnews API' });
    }

    const news = response.data;
    res.json(news);
  } catch (error) {
    console.error('Error fetching top headlines from gnews API:', error);
    res.status(500).json({ message: 'Failed to fetch top headlines.' });
  }
};

const getNews = async (req, res) => {
  try {
    const { page = 1, query = '', country = '', category = '' } = req.query;
    const pageSize = 10;
    const apiKey = process.env.GNEWS_API_KEY;

    const apiURL = `https://gnews.io/api/v4/search?q=${query}&country=${country}&category=${category}&page=${page}&max=${pageSize}&apikey=${apiKey}`;

    const response = await axios.get(apiURL);
    if (response.status !== 200) {
      return res.status(response.status).json({ message: 'Error from gnews API' });
    }

    const news = response.data;
    res.json(news);
  } catch (error) {
    console.error('Error fetching news from gnews API:', error);
    res.status(500).json({ message: 'Internal Server Error. Failed to fetch news.' });
  }
};

module.exports = { getTopHeadlines, getNews };
