// src/pages/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
import blogData from '../data/blog.json'; // Import blog data

const BlogPage = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);

    useEffect(() => {
     setPosts(blogData)
    }, [])

  return (
    <div className={`py-16 px-8 md:px-16 w-full min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}> {/* Add min-h-screen dan w-full */}
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        My Blog
      </h2>
      <ul className="space-y-6">
        {posts.map((post) => (
            <li key={post.id} className={`border rounded-lg overflow-hidden p-4 ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}`}>
                <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{post.title}</h3>
                  <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{post.excerpt}</p>
                 <Link
                   to={`/blog/${post.id}`}
                    className={`inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'text-white' : 'text-white'}`}
                     >View Detail
                 </Link>
           </li>
         ))}
        </ul>
    </div>
  );
};

export default BlogPage;