import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { BsArrowDown } from 'react-icons/bs'
import profilePic from '/profile.jpg'
import { forwardRef } from 'react'

const About = forwardRef((props, reference) => {
	About.displayName = 'About'

	return (
		<section
			ref={reference}
			className='h-screen w-full gradient overflow-hidden flex flex-col items-center justify-end gap-12 snap-start md:gap-6'
		>
			<div className='flex flex-col z-30 relative items-center gap-10 md:flex-row md:gap-40 md:justify-center md:w-full md:pb-16'>
				<img
					src={profilePic}
					className='rounded-full fade-in-1 w-[4.8em] h-[4.8em] md:w-[6em] md:h-[6em]'
				/>
				<div className='text-center flex fade-in-1_2 flex-col translate-y-6 md:gap-4'>
					<h1 className='text-2xl tracking-wider md:text-3xl'>
						Facundo Falech
					</h1>
					<span className='text-secondary-600 tracking-wide font-semibold text-xl md:text-2xl'>
						Full Stack Developer
					</span>
				</div>
			</div>
			<div className='text-[1.7rem] fade-in-1_4 flex gap-8 text-tertiary-500 md:text-4xl md:gap-16'>
				<a
					href='https://www.linkedin.com/in/facundo-e-falech-7ba27320b/'
					target='blank'
					className='hover:scale-110 transition-transform duration-300'
				>
					<FaLinkedinIn />
				</a>
				<a
					href='https://github.com/facufaia'
					target='blank'
					className='hover:scale-110 transition-transform duration-300'
				>
					<SiGithub />
				</a>
				<a className='hover:scale-110 transition-transform duration-300'>
					<GrMail />
				</a>
			</div>
			<div className='basis-[14%] arrow_down_animation text-primary-500 text-3xl flex items-end pb-7 md:text-4xl md:basis-[20%]'>
				<BsArrowDown />
				<span className='text-sm absolute min-w-max translate-x-9 -translate-y-2 md:text-lg md:translate-x-12'>
					Show my work
				</span>
			</div>
		</section>
	)
})

export default About

//   return (
//     <div ref={(element) => {
//       aboutMeRef.current = element;
//       if (ref) {
//         ref.current = element;
//       }
//     }}>
//       {/* Contenido de la sección "AboutMe" */}
//     </div>
//   );
// });
