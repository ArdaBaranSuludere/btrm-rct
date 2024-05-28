import React from 'react';
import { useState, useEffect } from 'react';

const BlogBox = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);
    
    return (
        <div className="blog-container">
            {blogs.map(blog => (
                <div className="blog-box mb-3">
                    <img className="blog-img w-100" src="src\assets\images\news-700x435-1.jpg" alt="Blog"/>
                    <div key={blog.id} className="cat-date-container">
                        <div className="cat-date">
                            <a href="#" className="category">{blog.category}</a>
                            <a href="#" className="publish-date">{blog.publish_date}</a>
                        </div>
                        <a className="blog-title" href="#">{blog.title}</a>
                        <p className="blog-subtitle">{blog.subtitle}</p>
                    </div>
                    <div className="author-infos-views">
                        <div className="author-infos">
                            <img className="author-photo mr-2" src="src\assets\images\user-images\arda.jpg" alt="Author" width="50" height="50"/>
                            <p className="author-name">DOGAN</p>
                        </div>
                        <div className="views">
                            <small className="blog-views"><i className="far fa-eye mr-2"></i>{blog.views}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogBox;
