import React from 'react';
import BlogBox from './blog-box'; // BlogBox bileşeninin doğru yolunu kullanın
import { useState, useEffect } from 'react';

const BlogContainer = () => {
    const [blogs, setBlogs] = useState([]);
    const [authors, setAuthors] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/blogs')
            .then(response => response.json())
            .then(data => {
                setBlogs(data);
                const authorIds = data.map(blog => blog.author_id);
                const uniqueAuthorIds = [...new Set(authorIds)];
                fetchAuthors(uniqueAuthorIds);
            })
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    const fetchAuthors = (authorIds) => {
        const fetches = authorIds.map(id =>
            fetch(`http://127.0.0.1:5000/api/users/${id}`)
                .then(response => response.json())
                .then(data => ({ id, data }))
        );

        Promise.all(fetches)
            .then(results => {
                const authorData = results.reduce((acc, { id, data }) => {
                    acc[id] = data;
                    return acc;
                }, {});
                setAuthors(authorData);
            })
            .catch(error => console.error('Error fetching authors:', error));
    };

    return (
        <div className="blog-container">
            <BlogBox items={blogs} authors={authors} />
        </div>
    );
};

export default BlogContainer;