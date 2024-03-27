import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all";
import { animal , hospital  } from "../../../assets/images";


function SpecialOffers() {
  const cards= [useAnimation(), useAnimation()];
  const handleHover= (index)=>{
    cards[index].start({y: "0"})
  }
  const handleHoverEnd= (index)=>{
    cards[index].start({y: "100%"})
  }
  
    
  return (
    <div className='w-full py-20 bg-zinc-200'>
        <div className='w-full px-20 border-b-[1px] border-zinc-300 pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Best Centers</h1>
            
        </div>
        <div className='px-20'>
          <div className='cards w-full flex gap-10 mt-10'>

            <motion.div  onHoverStart={()=>handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='cardcontainer relative  w-1/2 h-[80vh] '>

                   <h1 className='absolute flex overflow-hidden text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 left-full z-[9] text-8xl leading-none tracking-tighter '>
                      {"SAVE".split('').map((item,index)=>(<motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease : [0.22,1,0.36,1] , delay: index*.05}}  className='inline-block '  > {item} </motion.span>))}
                    </h1>
                            
              <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src={animal} />
              </div>
            </motion.div>
            <motion.div  onHoverStart={()=>handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className='cardcontainer relative  w-1/2 h-[80vh] '>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                   <h1 className='absolute flex overflow-hidden text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 right-full z-[9] text-8xl leading-none tracking-tighter '>
                   {"ANIMALS".split('').map((item,index)=>(<motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease : [0.22,1,0.36,1] , delay: index*.05}}  className='inline-block '  > {item} </motion.span>))}
                    </h1>
                  <img className='w-full h-full bg-cover' src={hospital} />

                </div>
            </motion.div>
          </div>
        </div>
      
    </div>
  )
}

export default SpecialOffers;
