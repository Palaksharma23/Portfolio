import React from "react";
import "./Contact.css";
import contact from "./contactmaybe.jpg";
 import "../About/About.css";
 import axios from 'axios'; 

function Contact() {
  
  const handleSubmit = (e) =>{
      e.preventDefault()
      // var data=new FormData(formRef.current)
      // axios.post('https://sheet.best/api/sheets/3b6fc57e-5cd4-4fbf-b9de-4a58a8d93968', data).then(res => {
      //   console.log(event.target[0].value)
      //  })
      console.log(e.target.message.value)
      console.log(e.target.email.value)
      // .catch(err => console.log(err))
      const data = {
        Mail: e.target.email.value,
        Message: e.target.message.value,
      }
      axios.post('https://sheet.best/api/sheets/6b6d7fa2-0051-4ab9-bebb-30639d49b123', data)
        .then(response => alert("Feedback Submitted Successfully!"))
        .catch(error => console.error('Error!', error.message))
  }
  return (
    <div className="contact">
      <section className="heading">
        <h1>Contact Me</h1>
        <p>
           Contact freely if you have any query or doubt!{" "}
        </p>
      </section>
      <section className="schooling">
        <div className="main form">
           <div className="left contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                type="email"
                placeholder="Your Email ID"
                name="email"
                className="input-box email-input"/>

                <textarea
                type="text"
                placeholder="Your message"
                name="message"
                className="input-box body-input">

                </textarea>
            <button type="submit" className="contact-btn"><div>Submit</div></button>
            </form>
        </div>
        <div className="right">
            <img className="schoolimage" src={contact} alt="schoolimage" />
          </div>
          </div>

       </section>
 
     </div>
  );
}

export default Contact;
