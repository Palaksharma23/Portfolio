import React from 'react';
import { Link } from 'react-router-dom'; 
import girlimage from './girlworking.jpg';
import "./About.css";
import "../Journey/Journey.css";

function About() {
  return <div className="journey">
      <section className="heading">
        <h1>About me</h1>

      </section>
      <section className="schl">
        <div className="main form">
           <div className="left contact-form-container">
           <p className='text'>
          Myself Palak Sharma, I am pursuing B.tech  degree in Computer Science Engineering from ABES Engineering College, Currently i am in my Second Year of College. I am experienced with C, C++, HTML, CSS, JavaScript, GIT, Github, VueJS, ReactJS and Python. 
          <br/> I love teaching needy childerns, so i also started a Youtube Channel to provide access to good quality, free education to all the students.{" "}<br/>
  I'm self starter with strong Interpersonal skills and a never ending thirst to explore new technologies. I am a team Player. I can keep my cool under pressure . I'm passionate about learning new things. I enjoy creating sleek and responsive applications in addition to being user friendly. With my cultural and sport experiences I excel at collaborating with teams of same or different knowledge sets. A versatile engineer with interests in software Engineering and Algorithms. Adaptable and self motivated learner. Interested in new programming technologies, and continuous self improvement.
        </p>
        </div>
        <div className="right">
            <img className="schoolimage" src={girlimage} alt="schoolimage" />
          </div>
          </div>

       </section>
       <div className='head-btns'>
           <Link to='/skills' className='btn btn-white'>
               <p className='btn-text'>Skills</p>
           </Link>
           <Link to='/projects' className='btn btn-transparent'>
               <p className='btn-text'>Projects</p>
           </Link>
           <Link to='/achievements' className='btn btn-transparent'>
               <p className='btn-text'>Achievements</p>
           </Link>
           <Link to='/journey' className='btn btn-transparent'>
               <p className='btn-text'>Journey</p>
           </Link>
       </div>
  </div>;
}

export default About;
