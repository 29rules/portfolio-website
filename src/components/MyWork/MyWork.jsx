import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className='mywork-container'>
            {mywork_data.map((work, index)=> {
                return <img key={index} src ={work.w_img} />
            })}

        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="arrow_icon" />
        </div>
    </div>
  )
}

export default MyWork