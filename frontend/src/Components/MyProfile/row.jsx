import React from 'react';
import Col10 from './col-lg-10';
import Profile from './profile';

const Row = () => {
    return (
    <div className="row"> 
        <Profile />
        <Col10 />
    </div>
    );
};

export default Row;
