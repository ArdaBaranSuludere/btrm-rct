import BlogBox from '../Blogs/blog-box';
import React, { useState, useEffect } from 'react';

const Col10 = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/user_blogs', {
            method: 'GET',
            credentials: 'include' // include cookies for session
        })
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error('Error fetching user blogs:', error));
    }, []);

    return (
        <div className="col-lg-10">
            <BlogBox items={blogs} />
        </div>
    );
};

export default Col10;