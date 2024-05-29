import React from 'react';

function BlogBox(props) {

    const itemList = props.items;

    const ListItems = itemList.map(item => 
        <div key={item.id} className="blog-box mb-3">
            <img className="blog-img w-100" src="src\assets\images\news-700x435-1.jpg" alt="Blog"/>
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
                    <img className="author-photo mr-2" src="src\assets\images\user-images\arda.jpg" alt="Author" width="50" height="50"/>
                    <p className="author-name">DOGAN</p>
                </div>
                <div className="views">
                    <small className="blog-views"><i className="far fa-eye mr-2"></i>{item.views}</small>
                </div>
            </div>
        </div>
    );
    
    return (
        <>{ListItems}</>
    );
};

export default BlogBox;
