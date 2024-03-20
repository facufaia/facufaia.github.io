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
import desktopAerolab from '/desktop_aerolab.png'
import desktopRickAndMorty from '/desktop_rick&morty.png'
import desktopCallCenter from '/desktop_call_center.png'
import { forwardRef, useState } from 'react'

const Works = forwardRef((props, reference) => {
	Works.displayName = 'Works'
	const [clickAble, setIsClickAble] = useState(0)

	return (
		<section ref={reference} className='flex flex-col gap-24 h-full'>
			<h2 className='text-center text-4xl z-30 relative tracking-wider md:text-5xl'>
				Works
			</h2>
			<div className='cloud-background-tertiary' />
			<div className='flex z-30 relative flex-col h-full w-full gap-6 px-10 md:grid md:grid-cols-2 md:px-32 lg:px-56'>
				<div className='w-full shrink-0 relative col-span-2'>
					<img src={desktopAerolab} className='rounded-xl' />
					<div
						onMouseEnter={() => {
							setIsClickAble(1)
						}}
						onMouseLeave={() => {
							setIsClickAble(0)
						}}
						className='absolute top-0 w-full justify-between py-3 h-full flex flex-col rounded-xl bg-[#000000b1] backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300'
					>
						<div className='flex text-3xl gap-5 pl-[5%] text-primary-500 md:text-5xl md:gap-16 md:pt-4'>
							<SiReact />
							<SiVite />
							<SiTailwindcss />
						</div>
						<div className='flex text-tertiary-600 justify-evenly w-full md:text-5xl md:pb-4'>
							<a
								href='https://github.com/facufaia/react_aerolab_challenge'
								onClick={(e) => {
									if (clickAble === 1) {
										return
									}
									e.preventDefault()
								}}
								target='blank'
								className='hover:scale-110 transition-transform duration-300'
							>
								<SiGithub />
							</a>
							<a
								href='https://facufaia.github.io/react_aerolab_challenge/'
								target='blank'
								onClick={(e) => {
									if (clickAble === 1) {
										return
									}
									e.preventDefault()
								}}
								className='hover:scale-110 transition-transform duration-300'
							>
								<BsEyeFill />
							</a>
						</div>
					</div>
				</div>
				<div className='w-full shrink-0 relative'>
					<img src={desktopCallCenter} className='rounded-xl' />
					<div
						onMouseEnter={() => {
							setIsClickAble(3)
							console.log(clickAble)
						}}
						onMouseLeave={() => {
							setIsClickAble(0)
						}}
						className='absolute top-0 w-full justify-between py-3 h-full flex flex-col rounded-xl bg-[#000000b1] backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300'
					>
						<div className='flex text-3xl gap-5 pl-[5%] text-primary-500 md:gap-8 md:pt-2'>
							<SiReact />
							<SiVite />
							<SiTailwindcss />
						</div>
						<div className='flex text-tertiary-600 justify-evenly w-full md:pb-2'>
							<a
								onClick={(e) => {
									if (clickAble === 3) {
										return
									}
									e.preventDefault()
								}}
								href='https://github.com/facufaia/landing_page_call_center'
								target='blank'
								className='hover:scale-110 transition-transform duration-300'
							>
								<SiGithub />
							</a>
							<a
								onClick={(e) => {
									if (clickAble === 3) {
										return
									}
									e.preventDefault()
								}}
								href='https://facufaia.github.io/landing_page_call_center/'
								target='blank'
								className='hover:scale-110 transition-transform duration-300'
							>
								<BsEyeFill />
							</a>
						</div>
					</div>
				</div>
				<div className='w-full shrink-0 relative'>
					<img src={desktopRickAndMorty} className='rounded-xl' />
					<div
						onMouseEnter={() => {
							setIsClickAble(2)
						}}
						onMouseLeave={() => {
							setIsClickAble(0)
						}}
						className='absolute top-0 w-full justify-between py-3 h-full flex flex-col rounded-xl bg-[#000000b1] backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300'
					>
						<div className='flex text-3xl gap-5 pl-[5%] text-primary-500 md:gap-8 md:pt-2'>
							<SiJavascript />
							<SiHtml5 />
							<SiCss3 />
						</div>
						<div className='flex text-tertiary-600 justify-evenly w-full md:pb-2'>
							<a
								href='https://github.com/facufaia/rick_and_morty_api_vanilla'
								target='blank'
								onClick={(e) => {
									if (clickAble === 2) {
										return
									}
									e.preventDefault()
								}}
								className='hover:scale-110 transition-transform duration-300'
							>
								<SiGithub />
							</a>
							<a
								href='https://facufaia.github.io/rick_and_morty_api_vanilla/index.html'
								target='blank'
								onClick={(e) => {
									if (clickAble === 2) {
										return
									}
									e.preventDefault()
								}}
								className='hover:scale-110 transition-transform duration-300'
							>
								<BsEyeFill />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
})

export default Works
