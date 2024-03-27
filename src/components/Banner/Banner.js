import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import { landing } from "../../assets/images";


const Banner=()=> {
    
  return (
    <div  className='w-full h-screen pt-1'>
        <div className='text-structure mt-52 px-20'>
            {["We Protect", "Animals"].map((item,index)=>{
                return (
                   <div className='masker'>
                       <div className='w-fit flex items-end '>
                          {index===1  && (<motion.div initial={{width:0}} animate={{width:"6vw"}} transition={{ease: [0.76 , 0, 0.24,1] , duration:1}} className='w-[6vw] h-[5.7vw]  relative top-[1.2vw] '> <img src={landing} alt="main" className='rounded-full'  width={60} height={60} /></motion.div>)}
                           <h1 className="uppercase pt-[2vw] -mb-[1vw] text-[6vw] leading-[0.75]  font-['Founders_Grotesk'] font-semibold">{item}</h1>

                       </div>
                    </div>
                );
            })}
            
            <div className='masker'>
                <h1 className="capitalize pt-[2vw] -mb-[1vw] text-[4vw] leading-[0.75]  font-['Founders_Grotesk'] font-semibold font-semibold">Animal matters to me</h1>
            </div>

        </div>
        <div className='border-t-[1px] border-zinc-200 mt-20 flex justify-between items-center py-5 px-20'>
            {["Stray Animals","Your Pets"].map((item,index)=>(
                <p className='text-md font-light -tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-4 py-2 border-[2px] border-zinc-200 font-light text-md capitalize rounded-full'>Start the Search</div>
                <div className='w-5 h-5 border-[2px] flex items-center justify-center border-zinc-200  rounded-full'>
                    <span className='rotate-[45deg]'>
                       <FaLongArrowAltUp />
                    </span>
                </div>
            </div>
        </div>

        
    </div>
      
   
    
  )
}

export default Banner;