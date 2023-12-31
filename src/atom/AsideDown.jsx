import React from 'react'
import {delay, motion, useAnimationControls} from "framer-motion";
import UseAnimations from "react-useanimations";
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { useEffect } from 'react';
import Contrassegno from "../../img/verified_7641727.png"

const AsideDown = () => {
   const [ref, inView] = useInView();
   const control = useAnimationControls();
    const boxVariant = {
    visible: { opacity: 1, scale: 1, left:0},
    hidden: { opacity: 0, scale: 0,left:-100 },
  }

  useEffect(()=>{
    if(inView){
     
      control.start("visible")
    
    }else{
     
      control.start("hidden")
   
      
    }
  },[control, inView]);
 
  return (
    <motion.div className='asideDown_box' ref = {ref} variants = {boxVariant} initial ="hidden" animate = {control}  transition = {{duration:"0.3",linear:"ease"}}>
        <motion.div className='asideDown_box--row1'>
            <motion.div  className='box_skill'>
              <p>FrameWork</p>
              <span className='box_skill--span1'> <p>Next.js</p> <img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span1'> <p>React.js</p> <img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span1'> <p>Laravel</p> <img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span1'> <p>Tailwind</p> <img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span1'><p>Bootstrap</p> <img className='box_skill--span_img' src = {Contrassegno}/></span>


            </motion.div>

            <motion.div className='box_skill' >
              <p>Linguaggi Programmazione</p>
              <span className='box_skill--span2'> <p>JavaScript</p> <img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span2' ><p>PHP</p> <img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span2' > <p>MY SQL</p><img className='box_skill--span_img' src = {Contrassegno}/></span>



            </motion.div>
            <motion.div className='box_skill' >
              <p>Linguaggi di Mark-Up e altro</p>
              <span className='box_skill--span3' ><p>HTML</p><img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span3' > <p>CSS</p><img className='box_skill--span_img' src = {Contrassegno}/></span>
              <span className='box_skill--span3' > <p>SCSS</p><img className='box_skill--span_img' src = {Contrassegno}/></span>



            </motion.div>
        </motion.div>
       
    </motion.div>
  )
}

export default AsideDown