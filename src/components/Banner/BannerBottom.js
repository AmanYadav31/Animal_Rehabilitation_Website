import React from 'react';
import {motion} from  "framer-motion";
function Marquee() {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".0.5" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text-white border-t-2 border-b-2 border-zinc-300  flex overflow-hidden whitespace-nowrap'>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease: "linear" , duration:7}} className='text-[14vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase pt-10 -mb-10 pr-20'>Save & Protect Animals</motion.h1>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease: "linear" , duration:7}} className='text-[14vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase pt-10 -mb-10 pr-20'>Save & Protect Animals</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
