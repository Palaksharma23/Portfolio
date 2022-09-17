import React from "react";
import "../About/About.css";
import school from "./schooll.png";
import opensource from "./opensource.jpg";
import leftarrow from "./leftarrow.svg";
import straightarrow from "./straightarrow.svg";
import youtube from "./Youtube.gif";
import rightarrow from "./rightarrow.svg";

const Journey = () => {
  return (
    <div className="about">
      <section className="heading">
        <h1>My Journey</h1>
        <p>
          My journey has been unique till now as i have always take every
          opportunity as a challenge and had given my best{" "}
        </p>
      </section>
      <section className="schooling">
        <div className="main">
          <div className="left">
            <div className="headingschooling">
              <h1>Schooling</h1>
            </div>
            <p>
              I completed my schooling in 2020. During the school time I always
              remain in top 1% student of the class, I participated in lot of
              competitions during my school days. <br /> Once I achieved Rank 1
              in Science Aptitiude test and won a cash prize of 7000 Rs. Lot of
              times i have won cash prize during my school days. <br /> I scored
              96% in Class 10th Board Examinations and 96% in Class 12th Board
              Examinations.
            </p>
            <p>-2020</p>
          </div>
          <div className="right">
            <img className="schoolimage" src={school} alt="schoolimage" />
          </div>
        </div>
      </section>
      <section>
        <div className="arrow-grid">
          <div className="big-arrow">
            <img src={leftarrow} alt="leftarrow" />
          </div>
          <div className="small-arrow">
            <img src={straightarrow} alt="" />
          </div>
        </div>
      </section>
      <section className="schooling">
        <div className="mainsecond">
          <div className="right">
            <a href="www.google.com">
              <img className="schoolimage" src={youtube} alt="Youtube gif" />
            </a>
          </div>
          <div className="left">
            <div className="headingsecond">
              <h1>Youtube</h1>
            </div>
            <p>
              After the school completion, I decided to teach students free of
              cost and started a Youtube channel to share my experiences,
              learnings, tips and tricks etc. with all the students.
            </p>
            <p>
              <a href="https://www.youtube.com/c/palak%20sharma%2023">
                Youtube
              </a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="arrow-grid">
          <div className="big-arrow">
            <img src={rightarrow} alt="leftarrow" />
          </div>
          <div className="small-arrow">
            <img src={straightarrow} alt="" />
          </div>
        </div>
      </section>
      <section className="schooling">
        <div className="main">
          <div className="left">
            <div className="headingschooling">
              <h1>College</h1>
            </div>
            <p>
              After that I took admission in College and took part in various
              events and joined various college groups and chapters to enhance
              upon my soft skills.
            </p>
            <p>Present</p>
          </div>
          <div className="right">
            <img
              className="schoolimage"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--2bZIjPGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d4tvukbt5mra37cvwklk.gif"
              alt="schoolimage"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="arrow-grid">
          <div className="big-arrow">
            <img src={leftarrow} alt="leftarrow" />
          </div>
          <div className="small-arrow">
            <img src={straightarrow} alt="" />
          </div>
        </div>
      </section>
      <section className="schooling">
        <div className="mainsecond">
          <div className="right">
            <a href="www.google.com">
              <img className="schoolimage" src={opensource} alt="Youtube gif" />
            </a>
          </div>
          <div className="left">
            <div className="headingsecond">
              <h1>Technologies</h1>
            </div>
            <p>
              In my first year of college, i learned various new Programming
              languages, libraries and frameworks to enhance my skillset. Then
              Web Development caught my interest and it leads me to Open Source
              where i contributed to various codebases and learn the basics
              about how a big scale project gets managed by community. I have
              participated in various programs such as Winter of Code(WoC)
              organised by GDSC, Delta Winter of Code(DWoC), Script Winter of
              Code(SWoC) and have recieved appreciation from my mentors for the
              quality of work, i delievered during the phase of the program.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
