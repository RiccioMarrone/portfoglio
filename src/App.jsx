import { BrowserRouter } from "react-router-dom";
import NavBar from "./atom/NavBar";
import SectionUp from "./atom/SectionUp";
import SectionDown from "./atom/SectionDown"
import AsideUp from "./atom/AsideUp";
import AsideDown from "./atom/AsideDown";
import Contact from "./atom/Contact";
import "./stili/style.css";

import {useRef} from "react";
import React from 'react'
import {delay, motion, useAnimationControls} from "framer-motion";
import UseAnimations from "react-useanimations";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const contact = useRef(null);
  

  const handleClick = (data) =>{
    if (data == "home"){
      home.current?.scrollIntoView({behavior: 'smooth'});
    }else if(data == "about"){
      about.current?.scrollIntoView({behavior: 'smooth'});
    }else if(data == "skill"){
      skill.current?.scrollIntoView({behavior: 'smooth'});

    }
    else if (data == "contact"){
      contact.current?.scrollIntoView({behavior: 'smooth'});

    }
  }


  return (
    <>
      <BrowserRouter>
        <NavBar handleClick = {handleClick} />
        <section>
              <SectionUp  home = {home} handleClick = {handleClick}/>
              <SectionDown about = {about}/>
             
        </section>
        
        <aside >
        <AsideUp skill = {skill}/>
        <AsideDown/>

        </aside>
        <footer>
          <Contact contact = {contact}/>
        </footer>
        
     
      </BrowserRouter>


    </>
  )
}

export default App
