import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import PlayBack from '../home/cars.mp4';

const Home = () => {

    return (
        <div className="home">
            <video 
            autoPlay 
            loop 
            muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src={PlayBack} type="video/mp4" />
            </video>
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