import React from 'react';
import './Projects.css';


// Project section passing in the project cards as props
function Projects(props){
    return (
        <div className="projects-container">
            <div className="projects-inner-container">
                <div id="project-title">
                    <h2>Projects</h2>  
                </div>
                <div id="projects">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Projects