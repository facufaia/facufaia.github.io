import {
  SiReactrouter,
  SiNodemon,
  SiEslint,
  SiJsonwebtokens,
  SiPrettier
} from 'react-icons/si'
import { FiFramer } from 'react-icons/fi'

const stack = [
    {
        logo : SiEslint,
        label : 'Eslint'
    },
    {
        logo : SiPrettier,
        label : 'Prettier'
    },
    {
        logo : SiReactrouter,
        label : 'React Router'
    },
    {
        logo : SiNodemon,
        label : 'Nodemon'
    },
    {
        logo : SiJsonwebtokens,
        label : 'JSON WEB Tokens'
    },{
        logo: FiFramer,
        label : 'Framer Motion'
    }
]

function Skills () {
    return(
        <section className='flex flex-col gap-24 items-center snap-start h-full mx-10'>
          <h2 className='text-4xl'>Other Skills</h2>
          <div className='grid grid-cols-3 gap-8 gap text-[2.7rem]'>
            {stack && stack.map((e)=>{
                return(
                   <div key={e.label} className='flex flex-col items-center gap-2 relative group'>
                    <e.logo/>
                    <span className='text-sm group-hover:opacity-100 opacity-0 text-center duration-300 transition-opacity'>{e.label}</span>
                   </div>
                )
            })}
          </div>
        </section>
    )
}

export default Skills