
import { useRef } from 'react';
import React from 'react'
import {delay, motion, useAnimationControls} from "framer-motion";
import UseAnimations from "react-useanimations";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SectionDown = ({about}) => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1,},
    hidden: { opacity: 0, scale: 0, },
  }
  const boxVariant2 = {
    visible : {opacity:1, left: 0},
    hidden : {opacity: 0, left: 100}
  }
  const control = useAnimationControls();
  const [ref,inView] = useInView();

  useEffect(()=>{
    if(inView){
      control.start("visible");
    }
    else{
      control.start("hidden");
    }
  },[control, inView])
  return (
    <div className = "container_section--down" >
      <article className = "article_left" >
        <motion.img   className = "object-cover"src = "https://img.freepik.com/free-vector/young-man-indexing_603843-388.jpg?size=626&ext=jpg&ga=GA1.2.827085345.1670066230&semt=ais" className='img-fluid article_left--img'></motion.img>
      </article>


      <article className = "article_right">
        <div className='article_right--box'>
          <h1 className='article_right--box--p1'>There Is All About Me</h1>
          <p className='article_right--box--p2'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
          <motion.span ref = {ref} variants = {boxVariant2} initial ="hidden" animate = {control}  transition = {{duration:"0.6",linear:"ease"}} >
            <p className='article_right--box--p3'>Name  <br/> <p className='article_right--box--p4'>Andrea Armando</p></p>
            <p className='article_right--box--p3'>Email  <br/> <p className='article_right--box--p4'>armandoandrea26@gmail.com</p></p>
          </motion.span>

          <motion.span ref = {ref} variants = {boxVariant2} initial ="hidden" animate = {control} transition = {{duration:"0.6",linear:"ease"}}>
            <p className='article_right--box--p3'>Phone <br/> <p className='article_right--box--p4'>(+39)3917187566</p></p>
            <p className='article_right--box--p3'>Instagram  <br/> <p className='article_right--box--p4'>_.andre_</p></p>
          </motion.span>
        </div>
      </article>
 
    </div>
  )
}

export default SectionDown;