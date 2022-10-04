import React from 'react';
import Comments from '../../Components/Comments/Comments';
import Likes from '../../Components/Likes/Likes';
import Title from '../../Components/Title/Title';
import './AboutPage.css'
import galactic from './galactic.jpeg'

const About = () => {
    return (
         <div className="about">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src={galactic} alt="galactic"/>
              <Title/>
              <Likes/>
            </div>
            <Comments/>
          </div>
        </div>
      </div>
    );
}

export default About;
