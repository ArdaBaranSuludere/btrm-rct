import React from 'react';

const BlogBox = () => {
    return (
        <div className="blog-box mb-3">
            <img className="blog-img w-100" src="src\assets\images\news-700x435-1.jpg" alt="Blog"/>
            <div className="cat-date-container">
                <div className="cat-date">
                    <a href="#" className="category">Nature</a>
                    <a href="#" className="publish-date">2024-05-23</a>
                </div>
                <a className="blog-title" href="#">WHAT IS THE AMAZON "TIPPING POINT" EXACTLY?</a>
                <p className="blog-subtitle">and what will it mean for the future of our planet</p>
            </div>
            <div className="author-infos-views">
                <div className="author-infos">
                    <img className="author-photo mr-2" src="src\assets\images\user-images\arda.jpg" alt="Author" width="50" height="50"/>
                    <p className="author-name">DOGAN</p>
                </div>
                <div className="views">
                    <small className="blog-views"><i className="far fa-eye mr-2"></i>100</small>
                </div>
            </div>
        </div>
        
    );
};

export default BlogBox;
