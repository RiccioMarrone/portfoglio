import React from 'react';

import { useRef } from 'react';

const box_container = {
  maxHeight: "600px",
  width: "100%",
  display: "block",
  backgroundColor: "yellow",
  position: "relative",
}


const SectionUp = ({home}) => {
  return (
    <div className='box_container' ref = {home} >

      <div className="section_wrapper">

          <div className='section_wrapper--left' >
              <div className = "section_wrapper--left--box">
                <span>
                <p className='section_wrapper--left--box--p1'>Hello I'Andrea <br/>I'm a Web-Developer </p>
                <p className='section_wrapper--left--box--p2'>Sono uno studente appenda diplmato in cerca di un lavoro come web-developer  <br/> Che se amavo era solo per non starmi a pensare
                                                        Cosa non c'è sul mare, come sei universale</p>
             </span>
              </div> 
              
              <div className='section_wrapper--left--down'>
                <div className='section_wrapper--left--down--btn'>Contattami</div>
              </div>
              
          </div>

          <div className='section_wrapper--right'>
           <img style = {{position:"relative",height:"90%",top:"10%",objectFit:"fill",overflow:"hidden" }}className='img-fluid' src = "img/[removal.ai]_00292e8b-3a05-4afb-9cbf-4eba2cfc7896-3426526_X0SOH2.png" />

          </div>
      </div>




    </div>






  )
}


export default SectionUp;