import React, { useState, useEffect } from 'react';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/portfolio');
        const data = await response.json();
        setPosts(data.docs);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((portfolio) => (
          <li key={portfolio.title}>{portfolio.subtitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
