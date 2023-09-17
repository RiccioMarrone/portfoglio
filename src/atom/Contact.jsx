import React from 'react'
import emailjs from "emailjs-com";
import Contatti from "../../img/4117039-PhotoRoom.png-PhotoRoom.png";
const Contact = ({contact}) => {

  function sendEmail(e){
    e.preventDefault();
    console.log("mandata");


    emailjs.sendForm('gmail', 'template_ldpotwv', e.target, '30i8SIru6oulCdlbX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }
  return (
    <div className='container_footer' ref={contact}>
      <div className='box_form'>
          
       
        <form className='form' onSubmit={sendEmail}>
          <div style = {{height:"25vh",}}>
            <img src ="https://cdn-icons-png.flaticon.com/256/1923/1923737.png" style={{objectFit:"contain"}}/>
          </div>
          <div className='form--name'>
            <label >Name:</label>
            <input type = "text" placeholder='Name' name = "name"/>
          </div>
          <div className='form--email'>
            <label >Email:</label>
            <input type = "email" placeholder='Email' name = "email" required/>
          </div>
          <div className='form--email'>
            <label >Oggetto:</label>
            <input type = "text" placeholder='Oggetto' name = "subject"/>
          </div>
          <div className='form--message'>
            <label >Message:</label>
            <textarea type = "text"  name = "message"> </textarea>
          </div>
          <input  type = "submit" className='btn_send' value="invia"/>

        </form>
      </div>
      <div className='container_footer--right'>
        <img src = {Contatti}/>

      </div>
    </div>
  )
}

export default Contact;