import React from 'react';
import './Projects.css';
import githubImage from './images/github.svg';


// Layout for the project cards
function ProjectCard(props){
    return (
            <div className="project-cards">
                <img className="project-image" src={props.image} alt="a screenshot of the project"/>
                <div className="project-details">
                    <div className="project-name">{props.name}</div>
                    <div className="project-link-container">
                        <div className="project-link"><a href={props.link} target="_blank"> Visit Site</a></div>
                        <div className="project-github"><a href={props.github} target="_blank"><img className="github-image" src={githubImage} alt="github icon"/></a></div> 
                    </div>
                </div>
            </div>
    )
}

export default ProjectCard