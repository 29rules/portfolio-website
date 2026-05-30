import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.jpg'

const whatIDo = [
  {
    no: "01",
    title: "Backend Development",
    desc: "Building robust, scalable REST APIs and microservices using Java, Spring Boot, and Spring MVC. Experienced with JWT auth, layered architecture, and clean code principles."
  },
  {
    no: "02",
    title: "Full Stack Web Apps",
    desc: "End-to-end development using React on the frontend and Spring Boot or Node.js/Express on the backend. Comfortable working across the full stack to ship complete features."
  },
  {
    no: "03",
    title: "Database Design & Optimization",
    desc: "Designing and querying relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB). Writing optimized queries, managing schemas, and handling data migrations."
  },
  {
    no: "04",
    title: "Banking Domain Expertise",
    desc: "5+ years at Scotiabank working on ATM systems, wire transfer applications, and core banking software. Strong understanding of regulated, high-availability financial systems."
  },
  {
    no: "05",
    title: "Test Automation",
    desc: "Writing automated test suites using Selenium and Java. Experience with unit testing, integration testing, and maintaining test frameworks in a CI/CD environment."
  },
  {
    no: "06",
    title: "DevOps & Tools",
    desc: "Working with Docker for containerization, Git/GitHub for version control, Maven for build management, JIRA for issue tracking, and REST API testing with Postman."
  }
]

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>What I Do</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="services-container">
        {whatIDo.map((item, index) => (
          <div className='services-format' key={index}>
            <h3>{item.no}</h3>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
