import {
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiHtml5,
    SiReact,
    SiVite,
    SiGithub,
} from 'react-icons/si'
import { BsEyeFill } from 'react-icons/bs'
import { useEffect, useRef } from 'react'
import desktopAerolab from '/desktop_aerolab.png'
import desktopRickAndMorty from '/desktop_rick&morty.png'
import desktopCallCenter from '/desktop_call_center.png'


function Works () {
  const jorge = useRef()
  useEffect(()=>{
    console.log(jorge.current);
  },[])
    return(
        <section className='flex flex-col gap-24 h-full' ref={jorge} >
          <h2 className='text-center text-4xl'>Works</h2>
          <div className='flex flex-col h-full w-full gap-6 px-10'>
            <div className='w-full shrink-0 relative'>
              <img src={desktopAerolab}/>
              <div className='absolute top-0 w-full justify-between py-3 h-full flex flex-col bg-[#00000099] opacity-0 hover:opacity-100 transition-opacity duration-300 text-[#11edab]'>
                <div className='flex text-3xl gap-5 pl-[5%] text-[#d9e2f4]'>
                  <SiReact />
                  <SiVite />
                  <SiTailwindcss />
                </div>
                <div className='flex justify-evenly w-full'>
                  <a href="https://github.com/facufaia/react_aerolab_challenge" target='blank' className='hover:scale-110 transition-transform duration-300'>
                    <SiGithub />
                  </a>
                  <a href="https://facufaia.github.io/react_aerolab_challenge/" target='blank' className='hover:scale-110 transition-transform duration-300'>
                    <BsEyeFill/>
                  </a>
                </div> 
              </div>
            </div>
            <div className='w-full shrink-0 relative'>
              <img src={desktopRickAndMorty}/>
              <div className='absolute top-0 w-full justify-between py-3 h-full flex flex-col bg-[#00000099] opacity-0 hover:opacity-100 transition-opacity duration-300 text-[#11edab]'>
                <div className='flex text-3xl gap-5 pl-[5%] text-[#d9e2f4]'>
                  <SiJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div className='flex justify-evenly w-full'>
                  <a href="" target='blank' className='hover:scale-110 transition-transform duration-300'>
                    <SiGithub />
                  </a>
                  <a href="" target='blank' className='hover:scale-110 transition-transform duration-300'>
                    <BsEyeFill/>
                  </a>
                </div> 
              </div>
            </div>
            <div className='w-full shrink-0 relative'>
              <img src={desktopCallCenter}/>
              <div className='absolute top-0 w-full justify-between py-3 h-full flex flex-col bg-[#00000099] opacity-0 hover:opacity-100 transition-opacity duration-300 text-[#11edab]'>
                <div className='flex text-3xl gap-5 pl-[5%] text-[#d9e2f4]'>
                  <SiReact />
                  <SiVite />
                  <SiTailwindcss />
                </div>
                <div className='flex justify-evenly w-full'>
                  <a href="https://github.com/facufaia/landing_page_call_center" target='blank' className='hover:scale-110 transition-transform duration-300'>
                    <SiGithub />
                  </a>
                  <a href="https://facufaia.github.io/landing_page_call_center/" target='blank' className='hover:scale-110 transition-transform duration-300'>
                    <BsEyeFill/>
                  </a>
                </div> 
              </div>
            </div>
          </div>
        </section>
    )
}

export default Works