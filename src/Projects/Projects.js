import React from "react";
import "./Projects.css";
import upsafe from "./UpSafelogoim.png";
import keep from "./keep.png"

const Projects = () => {
  return (
    <>
    <div className="section-container">
      <div className="project-cards-container">
        <div className="project-card">
          <div className="image-container">
            <a className="project-external-link">
              <img src={upsafe} alt="project" className="project-image" />
            </a>
          </div>

          <div className="project-details-container">
            <h2 className="project-heading">UpSafe</h2>
            <p className="project-details">A python based project to ensure your loved ones or goods' safety while you are away. This project gives notification for authorized and unauthorized users, using face recognition techniques and send a mail whenever an unauthorized user comes in front of the camera</p>
            <a href='https://github.com/Palaksharma23/UpSafe'>Github</a>

          </div>
        </div>
        <div className="project-card">
          <div className="image-container">
            <a className="project-external-link">
              <img src={keep} alt="project" className="project-image" />
            </a>
          </div>

          <div className="project-details-container">
            <h2 className="project-heading">GoogleKeep Clone</h2>
            <p className="project-details">It is a clone of Google keep website. This project allows us to keep notes of our useful tasks and all of it got saved on the local storage. You can make as many notes as you wish and can also delete notes at any time</p>
            <a href='https://github.com/Palaksharma23/Google-Keep-Website-Clone' target={"blank"}>Github</a>
            <a href='https://palaksharma23.github.io/Google-Keep-Website-Clone/'target={"blank"}>Deployement</a>

          </div>
        </div>  
       </div>
    </div>
    <div className="moresoon"><h2>More projects will be added soon</h2></div>
    </>
  );
};

export default Projects;
