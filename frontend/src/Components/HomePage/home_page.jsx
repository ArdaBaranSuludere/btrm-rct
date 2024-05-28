import React from 'react';
import BlogContainer from '../Blogs/blog-container';
import BlogBox from '../Blogs/blog-box';


const HomePage = () => {
    return (
        <React.Fragment>
            <div className="container">
                <BlogBox />
            </div>
        </React.Fragment>
    );
}

export default HomePage;