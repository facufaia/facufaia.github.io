import {
    SiLinkedin,
    SiGithub,
    SiFiles
  } from 'react-icons/si'
import { GrMail } from 'react-icons/gr'
import { BsArrowDown } from 'react-icons/bs'
import profilePic from '/profile.jpg'

function AboutMe () {
    return(
        <section className='h-screen w-full gradient flex flex-col items-center justify-end gap-14 snap-start mb-32'>
          <div className='flex flex-col items-center gap-6'>
            <img src={profilePic} className='rounded-full w-[7em] h-[7em]' />
            <h1 className='text-center text-3xl'>
              I'm Facundo Falech
              <br/>
              Full Stack Developer
            </h1>
          </div>
          <div className='text-[2.6rem] flex gap-6 text-[#11edab]'>
            <a href='https://www.linkedin.com/in/facundo-e-falech-7ba27320b/' target='blank' className='hover:scale-110 transition-transform duration-300'>
              <SiLinkedin />
            </a>
            <a href='https://github.com/facufaia' target='blank' className='hover:scale-110 transition-transform duration-300'>
              <SiGithub />
            </a>
            <a className='hover:scale-110 transition-transform duration-300'>
              <GrMail />
            </a>
            <a className='hover:scale-110 transition-transform duration-300'>
              <SiFiles />
            </a>
          </div>
          <div className='basis-[18%] text-6xl flex items-end pb-7'>
            <BsArrowDown />
          </div>
        </section>
    )
}

export default AboutMe