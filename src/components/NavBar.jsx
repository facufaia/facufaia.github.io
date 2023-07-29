import { motion } from 'framer-motion'
import { useState } from "react"

const SECTIONS = [
  {
    name: 'About Me'
  },{
    name: 'Projects'
  },{
    name:'Contact'
  }
]


function NavBar () {
  const [ isActive, setIsActive ] = useState(0)

  const handleClick = (index) => {
    setIsActive(index);
  }

  return(
      <header>
        <nav className='flex fixed py-[1.1rem] z-10 text-lg justify-between px-4 text-[#d3d9e7] w-full bg-[#08041f] gap-10'>
          <span className='text-[#259e7a]'>{'</>'}</span>
          <ul className='nav'>
            { SECTIONS.map((sec, index) => {
                return(
                  <li key={index} className='relative' onClick={()=>{handleClick(index)}}>
                    <button className={isActive === index ? 'navItem currentActive' : 'navItem'}>
                      {sec.name}
                    </button>
                    { index == isActive ? (<motion.div className="underline" layoutId="underline" />) : null }
                  </li>
                )
              }
            )}
          </ul>
        </nav>
      </header>
    )
}

export default NavBar