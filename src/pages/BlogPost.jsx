// src/pages/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import blogData from '../data/blog.json'; // Import blog data

const BlogPost = () => {
    const { theme } = useTheme();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const selectedPost = blogData.find((post) => post.id === parseInt(id));
        setPost(selectedPost);
          if(selectedPost) {
             const filteredPosts = blogData.filter(post => post.id !== parseInt(id))
              setRelatedPosts(filteredPosts)
          }
    }, [id]);


    if (!post) {
        return (
            <div className={`py-16 px-8 md:px-16 min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Post Not Found</h2>
           </div>
       );
    }

  return (
    <div className={`py-16 px-8 md:px-16 min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}> {/* Added min-h-screen */}
       <div className={`max-w-4xl mx-auto p-6 rounded-lg ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-700 border border-gray-600'}`}>
             <h2 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
               {post.title}
          </h2>
         <p className={`text-gray-600  ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{post.content}</p>
       </div>
        <div className="mt-12">
            <h3 className={`text-2xl font-bold mb-4 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                Related Posts
            </h3>
             <div className="flex flex-wrap justify-center">
                {relatedPosts.slice(0, 3).map(relatedPost => ( // Show only three related post
                   <div key={relatedPost.id} className="p-4 md:w-1/3">
                      <div className={`bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center h-full ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
                          <h4 className={`text-xl font-medium mb-2 text-center  ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{relatedPost.title}</h4>
                           <p className={`text-gray-600 text-sm text-center  ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{relatedPost.excerpt}</p>
                            <Link
                                  to={`/blog/${relatedPost.id}`}
                                  className={`mt-4 inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'text-white' : 'text-white'}`}
                               >View Detail
                            </Link>
                        </div>
                   </div>
                 ))}
            </div>
        </div>
    </div>
  );
};

export default BlogPost;