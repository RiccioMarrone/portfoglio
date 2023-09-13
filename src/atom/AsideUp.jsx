import React from 'react'
import {delay, motion, useAnimationControls} from "framer-motion";
import UseAnimations from "react-useanimations";
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { useEffect } from 'react';

const AsideUp = ({skill}) => {
  const control = useAnimationControls();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible:{opacity:1,scale:1},
    hidden:{opacity:1,scale:1}
  }
  useEffect(()=>{
    if(inView){
      control.start("visible")
    }else{
      control.start("hidden")
    }

  },[control,inView])
  return (
    <div  className='asideUp_box' ref = {skill}>
      <p>What i learned</p>
      <img ref = {ref} variants = {boxVariant} initial ="hidden" animate = {control}   className=' asideUp_box--img' src = "img/pngwing.com.png"></img>
      
    </div>
  )
}

export default AsideUp