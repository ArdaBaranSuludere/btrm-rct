import React from 'react';
import BlogContainer from '../Blogs/blog-container';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className="container">
                <BlogContainer />
            </div>
        </React.Fragment>
    );
}

export default HomePage;