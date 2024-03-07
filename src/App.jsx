// import { useState } from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import ProjectCard from './components/Projects/ProjectCard'
import project from './components/Projects/projects.json'
import Contact from './components/Contact/Contact'




function App() {
  return (
    // Browser Router Navigation Elements
    <Router>
      <div id="app-container">
        <Header />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="projects" element={<Projects>
            {
              // Map the array in the JSON file
              project.map((item)=> (
                // Data for each project element
                <ProjectCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  link={item.link}
                  github={item.github}
                />
              ))
            }
          </Projects>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>        
      </div>
    </Router>
  )
}

export default App
