import React from 'react';
import BlogBox from './blog-box'; // BlogBox bileşeninin doğru yolunu kullanın
import { useState, useEffect } from 'react';

const BlogContainer = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    
    return (
        <div className="blog-container">
            <BlogBox items={blogs}/>
        </div>
    );
};

export default BlogContainer;
