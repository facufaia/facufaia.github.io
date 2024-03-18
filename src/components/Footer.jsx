import { SiLinkedin, SiGithub } from 'react-icons/si'
import { GrMail } from 'react-icons/gr'

function Footer() {
  return (
    <footer className='bg-[#08041f] py-5 px-5 text-3xl flex w-full text-[#d9e2f4]'>
      <h2 className='leading-none text-2xl flex-1'>Contact me</h2>
      <div className='flex justify-center gap-6 text-[#11edab] list-none'>
        <li className='hover:scale-110 transition-transform duration-300'>
          <a
            target='blank'
            href='https://www.linkedin.com/in/facundo-e-falech-7ba27320b/'
          >
            <SiLinkedin />
          </a>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <a target='blank' href='https://github.com/facufaia'>
            <SiGithub />
          </a>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <GrMail />
        </li>
      </div>
    </footer>
  )
}

export default Footer
