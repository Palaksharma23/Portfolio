import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { GoMail } from "react-icons/go";

import './Footer.css'

function Footer() {
  return (
      <div className='footer'>
      <div className='responsiverow'>
          <div className='inner'>
              <a className='socialcircle' target={"blank"} onClick={()=>window.open("https://github.com/Palaksharma23")
              }>
                  <AiFillGithub/>
              </a>
              <a className='socialcircle' target={"blank"} onClick={()=>window.open("https://www.youtube.com/c/palak%20sharma%2023")}>
                  <ImYoutube2/>
              </a>
              <a className='socialcircle' target={"blank"} onClick={()=>window.open("https://www.linkedin.com/in/palak-sharma-57256a200/")}>
                  <GrLinkedin/>
              </a>
              <a className='socialcircle' target={"blank"} onClick={()=>window.open("mailto:sharmapalak2312@gmail.com")}>
                  <GoMail/>
              </a> 
              </div>
      </div>
    <div className='copyright'> ©Copyright,2022. All rights reserved</div>
    </div>
  )
}

export default Footer