import React from "react";
import "./Skills.css";
import skillsVector from "./skills_vector.png";

const Skills = () => {
  return (
    <div className="section-container">
      <div className="skill-card-container">
        <div className="skill">
          <img
            src="https://user-images.githubusercontent.com/62301468/121687119-974f3380-cadf-11eb-8f28-69e2a03e0604.png"
            alt="skill"
          />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img
            src="https://user-images.githubusercontent.com/62301468/121686875-5820e280-cadf-11eb-8cc4-65243f9e4232.png"
            alt="skill"
          />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img
            src="https://user-images.githubusercontent.com/62301468/121687353-e09f8300-cadf-11eb-9b4d-aefc6c3e248d.png"
            alt="skill"
          />
          <p>JavaScript</p>
        </div>

        <div className="skill">
          <img
            src="https://user-images.githubusercontent.com/62301468/121687657-37a55800-cae0-11eb-8aa5-ab3075d122c0.png"
            alt="skill"
          />
          <p>React</p>
        </div>
        <div className="skill">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
            alt="skill"
          />
          <p>Vue.js</p>
        </div>
        <div className="skill">
          <img
            src="https://user-images.githubusercontent.com/62301468/121687543-19d7f300-cae0-11eb-9152-7a8da64ef14f.png"
            alt="skill"
          />
          <p>NodeJS</p>
        </div>
        <div className="skill">
          <img
            src="https://user-images.githubusercontent.com/62301468/121687472-0462c900-cae0-11eb-9cd8-11ea6b7862c1.png"
            alt="skill"
          />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="skill"
          />
          <p>Python</p>
        </div>
        <div className="skill">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="skill"
          />
          <p>C</p>
        </div>
        <div className="skill">
          <img
            src="https://user-images.githubusercontent.com/62301468/121688617-493b2f80-cae1-11eb-9585-fc6060b2f4a4.png"
            alt="skill"
          />
          <p>C++</p>
        </div>
      </div>

      <div className="skills-vector-frame">
        <img src={skillsVector} alt="skills" className="skills-vector" />
      </div>
    </div>
  );
};

export default Skills;
