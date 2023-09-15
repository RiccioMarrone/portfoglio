import React, { useState } from 'react';
import Logo from "../../img/[removal.ai]_00292e8b-3a05-4afb-9cbf-4eba2cfc7896-3426526_X0SOH2.png"

import { useRef,useEffect } from 'react';

const box_container = {
  maxHeight: "600px",
  width: "100%",
  display: "block",
  backgroundColor: "yellow",
  position: "relative",
}
 


const SectionUp = ({home,handleClick}) => {
  const [btnStato, setBtnStato] = useState(true);
  let style = {
    backgroundColor:"rgba(20, 250, 143, 0.349)",
  }
  const time = () =>{
    setTimeout(()=>{
      alert("ciao")
      setBtnStato(true); 
    },400);
  }
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
                <div className='section_wrapper--left--down--btn' style = {btnStato?{backgroundColor:"rgba(20, 250, 143, 0.349)"}:{backgroundColor:"rgba(3, 0, 41, 0.856)"}} onClick={()=>{setBtnStato(false);handleClick("contact")}} >Contattami</div>
              </div>
              
          </div>

          <div className='section_wrapper--right'>
           <img style = {{position:"relative",height:"90%",top:"10%",objectFit:"fill",overflow:"hidden" }}className='img-fluid' src = {Logo} />

          </div>
      </div>




    </div>






  )
}


export default SectionUp;