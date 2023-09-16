import React, { useState } from 'react';
import Logo from "../../img/[removal.ai]_00292e8b-3a05-4afb-9cbf-4eba2cfc7896-3426526_X0SOH2.png"
import Ball from "../../img/Stacked_blob.svg";
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
      <div className='box_left'>
        <div className=' wave wave1'></div>
        <div className=' wave wave2'></div> 
        <div className=' wave wave3'></div>
       

        
        <div className='box_left--up'>
          <div className='box_left--up_container'>
           <h2 className='p1'>Hello,I'm Andrea</h2> 
           <h2 className='p2'>I'm a Wed-Developer</h2>
           <div  className='p3'>Sono uno studente in cerca di lavoro io sono <br/>che ha tanta voglia di ....</div>
           
           <div className='box_left--down--btn' onClick={()=>{handleClick("contact")}}>
            Contattami
          </div>
          </div>
        </div>
        
        



      </div>
      <div className='box_right'>
        <img src = {Logo} />
      </div>
 
 




    </div>






  )
}


export default SectionUp;