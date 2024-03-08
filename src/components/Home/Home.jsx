import React from 'react';
import './Home.css';
import image from './images/image.png';


function Home(){
    return (
        // Container for the Home Section
        <div className="home-container">
            <div className="home-inner-container" id="information">
                {/* Portfolio Introduction Section */}
                <div id="brand-box">

                    {/* <div id="image"><img src={image} /></div> */}
                    <div id="text">
                    <div ><img src={image} id="image" /></div>

                        <h1><span className="small">I'm</span> Nicole</h1>
                        <h3>Welcome  to my portfolio</h3>
                        <p>I craft ideas into <span className="emphasis">elegant</span>, <span className="emphasis">efficient</span>, and <span className="emphasis">engaging</span> web-based narratives</p>
                    </div>
                </div>
            </div>
            <div className="home-inner-container" id="moon"></div>
        </div>
    )
}

export default Home
