// src/components/BlogCarousel.jsx

import React from 'react';
import './BlogCarousel.css';

const BlogCarousel = ({ articles, isVertical, lastArticleRef }) => {
  return (
    <div className={`blog-carousel ${isVertical ? 'vertical' : 'horizontal'}`}>
      {articles.map((article, index) => (
        <div 
          className="blog-card" 
          key={index} 
          style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          onDoubleClick={() => article.url && window.open(article.url, "_blank")}
          ref={index === articles.length - 1 ? lastArticleRef : null}
        >
          <div className="content">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCarousel;
