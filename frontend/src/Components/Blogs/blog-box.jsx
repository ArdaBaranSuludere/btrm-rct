import React from 'react';
import PropTypes from 'prop-types'

const BlogBox = ({ items, authors }) => {
    return (
        <>
            {items.map(item => (
                <div key={item.id} className="blog-box mb-3">
                    <img className="blog-img w-100" src="src/assets/images/news-700x435-1.jpg" alt="Blog" />
                    <div key={item.id} className="cat-date-container">
                        <div className="cat-date">
                            <a href="#" className="category">{item.category}</a>
                            <a href="#" className="publish-date">{item.publish_date}</a>
                        </div>
                        <a className="blog-title" href="#">{item.title}</a>
                        <p className="blog-subtitle">{item.subtitle}</p>
                    </div>
                    <div className="author-infos-views">
                        <div className="author-infos">
                            <img className="author-photo mr-2" src="src/assets/images/user-images/arda.jpg" alt="Author" width="50" height="50" />
                            <p className="author-name">{authors[item.author_id] ? authors[item.author_id].username : 'Unknown'}</p>
                        </div>
                        <div className="views">
                            <small className="blog-views"><i className="far fa-eye mr-2"></i>{item.views}</small>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

// BlogBox.prototype = {
//     items: PropTypes.shape({
//         author_id: PropTypes.number.isRequired,
//         category: PropTypes.string,
//         content: PropTypes.string,
//         id: PropTypes.number,
//         publish_date: PropTypes.date,
//         reading_time: PropTypes.number,
//         subtitle: PropTypes.string,
//         title: PropTypes.string,
//         views: PropTypes.number
//       })
// }

export default BlogBox;
