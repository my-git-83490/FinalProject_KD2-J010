import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from "./Images/cat3.jpeg"

const HeroSection = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    return (
        <div style={backgroundImageStyle}>
            <div className="container">
                <h1 className="display-4">Rent the Best Clothes for Every Occasion</h1>
                <p className="lead">Discover a wide range of fashion collections tailored to fit your style.</p>
                <a href="#collections" className="btn btn-warning btn-lg">Explore Collections</a>
            </div>
        </div>
    );
};

export default HeroSection;
