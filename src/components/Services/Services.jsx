import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
          <h1>My Services</h1>
          <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="services-container">
          {services_data.map((Services,index) => {
            return <div className='services-format' key={index}>
              <h3>{Services.s_no}</h3>
              <h2>{Services.s_name}</h2>
              <p>{Services.s_desc}</p>
              <div className='services_readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default Services