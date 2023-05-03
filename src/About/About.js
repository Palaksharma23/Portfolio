import React from "react";
import { Link } from "react-router-dom";
import girlimage from "./girlworking.jpg";
import "./About.css";
import "../Journey/Journey.css";

function About() {
  return (
    <div className="journey">
      <section className="heading">
        <h1>About me</h1>
      </section>
      <section className="schl">
        <div className="main form">
          <div className="left contact-form-container">
            <p>
              I am Palak Sharma, a 3rd Year Computer Science and Engineering
              undergraduate at ABES Engineering College, Ghaziabad, UP, India.
              <br />
              <br />
              I’m a keen learner and a builder by heart; aligned toward decoding
              real-life problems using technology. 
              <br />
              <br /> I was one of the selected Google Summer of Code (GSoC)
              student developers for 2022 under the organization Moja Global. I
              believe that one’s knowledge amplifies when shared; and thus,
              writing technical blogs and delivering tech talks in communities
              is something that I am passionate about. I have previously worked
              as a Technical Content Writer Intern at Coding Ninjas, and have
              gained exposure to diverse technologies.  <br />
              <br />I am also fond of Developer Communities, I am a member of
              various Open-Source organizations, and I don’t miss any chance to
              involve myself in organizing, volunteering, and helping my fellow
              developers there. I have assisted 50+ coders to get started in
              open-source.  I am associated with various technical communities
              at my college. I am the founder of Techyons. I am the Technical
              Guidance Lead at the Geeks for Geeks ABESEC chapter. I am the Lead
              of the Codechef ABESEC chapter and a Lead at the Technovation
              club.  <br />
              I'm self starter with strong Interpersonal skills and a never
              ending thirst to explore new technologies. I am a team Player. I
              can keep my cool under pressure . With my cultural and sport
              experiences I excel at collaborating with teams of same or
              different knowledge sets. A versatile engineer with interests in
              software Engineering and Algorithms. Adaptable and self motivated
              learner. <br />
              <br />
              In a nutshell, I am a passionate, enthusiastic person, a tech
              explorer, and an admirer of the power of technology that can make
              the world a better place.
            </p>
          </div>
          <div className="right">
            <img className="schoolimage" src={girlimage} alt="schoolimage" />
          </div>
        </div>
      </section>
      <div className="head-btns">
        <Link to="/skills" className="btn btn-white">
          <p className="btn-text">Skills</p>
        </Link>
        <Link to="/projects" className="btn btn-transparent">
          <p className="btn-text">Projects</p>
        </Link>
        <Link to="/achievements" className="btn btn-transparent">
          <p className="btn-text">Achievements</p>
        </Link>
        <Link to="/journey" className="btn btn-transparent">
          <p className="btn-text">Journey</p>
        </Link>
      </div>
    </div>
  );
}

export default About;
