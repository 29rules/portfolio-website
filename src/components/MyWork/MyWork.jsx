import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.jpg'

const projects = [
  {
    id: 1,
    title: "AgroConnect World",
    tech: "React · Spring Boot · MongoDB · Docker",
    desc: "Full-stack B2B agri-trade platform connecting spice suppliers with international buyers. Features real-time import/export management, microservices architecture, and REST APIs.",
    github: "https://github.com/29rules/AgroConnectWorld",
    live: ""
  },
  {
    id: 2,
    title: "Mini Bank Transaction Engine",
    tech: "Java · Spring Boot · MySQL · REST API",
    desc: "Banking transaction engine simulating core banking operations — account creation, fund transfers, transaction history, and audit trails with Spring Security.",
    github: "https://github.com/29rules/minibank-transaction-engine",
    live: ""
  },
  {
    id: 3,
    title: "Agronexus",
    tech: "Java · Spring Boot · React · PostgreSQL",
    desc: "Agricultural nexus platform with product catalog, order management, and supplier tracking. Built with a clean REST API backend and React dashboard.",
    github: "https://github.com/29rules/agronexus",
    live: ""
  },
  {
    id: 4,
    title: "Portfolio Website",
    tech: "React · Vite · CSS · Vercel",
    desc: "This portfolio — a personal developer site built with React and Vite, featuring smooth navigation, contact form with Web3Forms API, and deployed on Vercel.",
    github: "https://github.com/29rules/portfolio-website",
    live: "https://bishnoianurag.site"
  },
  {
    id: 5,
    title: "LeetCode DSA Practice",
    tech: "Java · Algorithms · Data Structures",
    desc: "Organized collection of 100+ LeetCode solutions in Java, grouped by topic (Arrays, Trees, Graphs, DP, etc.). Demonstrates strong algorithmic thinking and problem-solving.",
    github: "https://github.com/29rules/Leetcode",
    live: ""
  }
]

const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className='mywork-container'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <div className='project-card-header'>
              <h2>{project.title}</h2>
              <p className='project-tech'>{project.tech}</p>
            </div>
            <p className='project-desc'>{project.desc}</p>
            <div className='project-links'>
              <a href={project.github} target='_blank' rel='noopener noreferrer' className='project-link'>GitHub</a>
              {project.live && (
                <a href={project.live} target='_blank' rel='noopener noreferrer' className='project-link project-link-live'>Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyWork
