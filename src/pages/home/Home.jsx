import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <div className="starting-page">
                <h1>Car Listing Application</h1>
                <Link to='/cars'>
                    CAR LIST
                </Link>
                <Link to='/contact'>
                    CONTACT
                </Link>
            </div>
            <div className="footer">
                <h3>Created by: Nagy Márk</h3>
            </div>
        </div>
    );
};

export default Home;