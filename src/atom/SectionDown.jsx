
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
    visible : {scale:1,opacity:1},
    hidden : {scale: 0,opacity:0}
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
    <div className = "container_section--down" ref={about} >
      <article className = "article_left" >
        <motion.img  src = "https://img.freepik.com/free-vector/young-man-indexing_603843-388.jpg?size=626&ext=jpg&ga=GA1.2.827085345.1670066230&semt=ais" className='img-fluid article_left--img'></motion.img>
      </article>


      <article className = "article_right">
        <div className='article_right--box'>
          <h1 className='article_right--box--p1'>There is all About me</h1>
          <p className='article_right--box--p2'>Mi chiamo Andrea Armando e sono un ragazzo con una grande passione per il mondo del web, recentemente ho concluso il corso Hackdemy presso Aulab il quale mi ha aiutato ad arricchire e consolidare conoscenze come ( sviluppo software,teamwork,.. ). Se dovessi scelgliere un aggettivo che mi rappresenta, allora la  cursiosità farebbe al caso mio, infatti è stata proprio questa ad avvicinarmi a questo settore e sopprattutto ad iniziare fin da subito a studiare da autodidatta.Sebbene non ho esperienza lavorativa, sono entusiasta di mettermi alla prova con le conoscenze acquisite e sopratutto di migliorarmi e raggiungere nuovi obbiettivi.
          </p>
          <motion.span ref = {ref} variants = {boxVariant2} initial ="hidden" animate = {control}  transition = {{duration:"0.5",linear:"ease"}} >
            <p className='article_right--box--p3'>Name  <br/> <p className='article_right--box--p4'>Andrea Armando</p></p>
            <p className='article_right--box--p3'>Linkedin <br/> <a style = {{textDecoration:"none"}} href='https://www.linkedin.com/in/andrea-armando-727388285/'><p className='article_right--box--p4' >https://www.linkedin.com/in/andrea-armando-727388285/</p></a> </p>
          </motion.span>

          <motion.span ref = {ref} variants = {boxVariant2} initial ="hidden" animate = {control} transition = {{duration:"0.5",linear:"ease"}}>
            <p className='article_right--box--p3'>Phone <br/> <p className='article_right--box--p4'>(+39)3917187566</p></p>
            <p className='article_right--box--p3'>Email  <br/> <p className='article_right--box--p4'>armandoandrea26@gmail.com</p></p>
          </motion.span>
        </div>
      </article>
 
    </div>
  )
}

export default SectionDown;