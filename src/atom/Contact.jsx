import React from 'react'

const Contact = () => {

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ldpotwv', e.target, 'SOYa_6Dcg40F0KWqiIv9q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      console.log("mandata")

  }
  return (
    <div className='container_footer'>
      <div className='box_form'>

        <p>Send me a message</p>
        <form className='form' onSubmit={sendEmail}>
          <div className='form--name'>
            <label >Name:</label>
            <input type = "text" placeholder='Name' name = "name"/>
          </div>
          <div className='form--email'>
            <label >Email:</label>
            <input type = "email" placeholder='Email' name = "email"/>
          </div>
          <div className='form--email'>
            <label >Subject:</label>
            <input type = "email" placeholder='Email' name = "email"/>
          </div>
          <div className='form--message'>
            <label >Message:</label>
            <input type = "text"  name = "message"/>
          </div>
        </form>
        <div  type = "submit" className='btn_send'>Invia</div>
      </div>
    </div>
  )
}

export default Contact