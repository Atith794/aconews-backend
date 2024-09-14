// import React from 'react';

// const NewsCard = ({ article }) => {
//   return (
//     <div className="news-card">
//       <img src={article.image} alt={article.title} />
//       <h3>{article.title}</h3>
//       <p>{article.description}</p>
//       <a href={article.url} target="_blank" rel="noopener noreferrer">
//         Read More
//       </a>
//     </div>
//   );
// };

// export default NewsCard;


import React from 'react';
import '../App.css';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
