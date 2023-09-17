
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
          <p className='article_right--box--p2'>Ciao, mi chiamo Andrea e sono uno studente da poco diplomato in ambito informatico presso l'ITIS di Cuneo. Una delle mie passioni è la programmazione orientata al web,sfortunatamente non ho esperienza in ambito lavorativo, ma sono pronto ad impegnarmi in modo tale da non risultare come un peso,ma come una valida risorsa</p>
          <motion.span ref = {ref} variants = {boxVariant2} initial ="hidden" animate = {control}  transition = {{duration:"0.5",linear:"ease"}} >
            <p className='article_right--box--p3'>Name  <br/> <p className='article_right--box--p4'>Andrea Armando</p></p>
            <p className='article_right--box--p3'>GitHub  <br/> <a style = {{textDecoration:"none"}} href='https://github.com/RiccioMarrone'><p className='article_right--box--p4' >https://github.com/RiccioMarrone</p></a> </p>
          </motion.span>

          <motion.span ref = {ref} variants = {boxVariant2} initial ="hidden" animate = {control} transition = {{duration:"0.5",linear:"ease"}}>
            <p className='article_right--box--p3'>Phone <br/> <p className='article_right--box--p4'>(+39)3917187566</p></p>
            <p className='article_right--box--p3'>Email  <br/> <p className='article_right--box--p4'>armandoandrea27@gmail.com</p></p>
          </motion.span>
        </div>
      </article>
 
    </div>
  )
}

export default SectionDown;