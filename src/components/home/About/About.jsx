import React from 'react'
import { dog, brand  } from "../../../assets/images";

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#FFC400] rounded-tl-xl rounded-tr-xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">CENTRE  FOR  WILDLIFE  REHABILITATION  AND  CONSERVATION  (CWRC)</h1>
        <h2 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">BACK TO THE WILD</h2>
        <div className='"w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#e4b725]'>
            <div className='w-1/2 h-[60vh] rounded-3xl'>
              <img src={dog} alt="dog" width={450} height={450} className=' pt-20 rounded-3xl'/>

            </div>
            <div className='w-1/2'>
            <img src={brand} alt="animal" width={200} height={150} className=' pt-10 rounded-3xl'/>
                <h2 className='pt-5 pb-10 font-semibold'>Animals Matters to Me (AMTM) is a clinical rescue facility for strays & abandoned ownerless animals, birds & reptiles in need of help. We run a shelter cum hospital in Malad, Mumbai and offer services of Adoption, Animal Shelter, Medical Treatment, Sterilisation & Animal Ambulance</h2>
                <button className='flex uppercase gap-10 items-center mt-5 px-8 py-4 bg-zinc-900 rounded-full text-white'>Read More
                   <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            
        </div>
    </div>

  )
}

export default About
