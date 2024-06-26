// src/App.jsx

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import BlogCarousel from './components/BlogCarousel';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all'); // Default category set to 'all'
  const [isVertical, setIsVertical] = useState(true); // Default to vertical layout
  const [page, setPage] = useState(1); // Page state for infinite scrolling
  const [loading, setLoading] = useState(false); // Loading state
  const observer = useRef();

  useEffect(() => {
    fetchNews();
  }, [category, query]);

  const fetchNews = async () => {
    setLoading(true);
    let url = `https://inshortsapi.vercel.app/news?category=${category === 'all' ? '' : category}`;

    try {
      const response = await axios.get(url);
      const newsArticles = response.data.data;

      // Filter articles based on query if provided
      const filteredArticles = query
        ? newsArticles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()))
        : newsArticles;

      setArticles(filteredArticles.length > 0 ? filteredArticles : [{ title: "No news available", content: "", imageUrl: "" }]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setCategory(query);
    fetchNews();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === '') {
      setCategory('all');
      fetchNews();
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setArticles([]); // Clear articles before fetching new category
    fetchNews();
  };

  const lastArticleRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
        fetchNews();
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div className="App">
      <div className="news-reels-header">
        <h1>News Reels</h1>
      </div>
      <SearchBar 
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={handleCategoryChange}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <BlogCarousel articles={articles} isVertical={isVertical} lastArticleRef={lastArticleRef} />
      )}
    </div>
  );
};

export default App;
