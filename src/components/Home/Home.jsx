import React from 'react';
import './Home.css';


function Home(){
    return (
        // Container for the Home Section
        <div className="home-container">
            <div className="home-inner-container" id="information">
                {/* Portfolio Introduction Section */}
                <div id="brand-box">
                    <div id="text">
                        <h1>Nicole's Portfolio</h1>
                        <p>Crafting ideas into elegant, efficient, and engaging web-based narratives</p>
                    </div>
                </div>
            </div>
            <div className="home-inner-container" id="moon"></div>
        </div>
    )
}

export default Home
