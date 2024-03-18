import {
	SiReactrouter,
	SiNodemon,
	SiEslint,
	SiJsonwebtokens,
	SiPrettier,
	SiReact,
	SiVite,
	SiTailwindcss,
	SiNextdotjs,
	SiExpress,
	SiReacthookform,
	SiMysql,
	SiRailway,
	SiVercel,
	SiFigma,
	SiAstro,
	SiJavascript,
} from 'react-icons/si'
import { FaStripe, FaPaypal } from 'react-icons/fa'
import { FiFramer } from 'react-icons/fi'
import { TbBrandOauth } from 'react-icons/tb'
import { forwardRef } from 'react'

const stack = [
	{
		logo: SiJavascript,
		label: 'JavaScript',
	},
	{
		logo: SiReact,
		label: 'React',
	},
	{
		logo: SiVite,
		label: 'Vite',
	},
	{
		logo: SiTailwindcss,
		label: 'Tailwind CSS',
	},
	{
		logo: SiReacthookform,
		label: 'React Hook Form',
	},
	{
		logo: SiReactrouter,
		label: 'React Router',
	},
	{
		logo: SiAstro,
		label: 'Astro ',
	},
	{
		logo: SiNextdotjs,
		label: 'Next.js',
	},
	{
		logo: SiExpress,
		label: 'Express',
	},
	{
		logo: TbBrandOauth,
		label: 'Oauth',
	},
	{
		logo: SiJsonwebtokens,
		label: 'JSON WEB Tokens',
	},
	{
		logo: SiMysql,
		label: 'MySQL',
	},
	{
		logo: SiFigma,
		label: 'Figma',
	},
	{
		logo: SiVercel,
		label: 'Vercel',
	},
	{
		logo: SiRailway,
		label: 'Railway',
	},
	{
		logo: SiEslint,
		label: 'Eslint',
	},
	{
		logo: SiPrettier,
		label: 'Prettier',
	},
	{
		logo: SiNodemon,
		label: 'Nodemon',
	},
	{
		logo: FiFramer,
		label: 'Framer Motion',
	},
	{
		logo: FaPaypal,
		label: 'Paypal',
	},
	{
		logo: FaStripe,
		label: 'Stripe',
	},
]

const Skills = forwardRef((props, reference) => {
	Skills.displayName = 'Skills'

	const half = Math.ceil(stack.length / 2)
	const firstHalf = stack.slice(0, half)
	const secondHalf = stack.slice(half, stack.length)

	return (
		<section className='flex flex-col gap-16 items-center snap-start h-full'>
			<h2 className='text-4xl tracking-wider md:text-5xl'>Skills</h2>
			<div className='flex flex-col gap-8 overflow-visible text-[2.7rem] group border-4 border-tertiary-800 pt-10 pb-4 md:pt-20 md:pb-8'>
				<div className='flex gap-16 slider_a w-[2816px]'>
					{firstHalf &&
						firstHalf.map((e, index) => {
							return (
								<div
									key={e.label}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min opacity-100 text-tertiary-600 font-semibold text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
					{firstHalf &&
						firstHalf.map((e, index) => {
							return (
								<div
									key={e.label}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min text-tertiary-600 font-semibold opacity-100 text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
					{firstHalf &&
						firstHalf.map((e, index) => {
							return (
								<div
									key={e.label}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min text-tertiary-600 font-semibold opacity-100 text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
					{firstHalf &&
						firstHalf.map((e, index) => {
							return (
								<div
									key={e.label}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min text-tertiary-600 font-semibold opacity-100 text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
				</div>
				<div className='flex translate-x-6 gap-16 slider_b w-[2560px]'>
					{secondHalf &&
						secondHalf.map((e, index) => {
							return (
								<div
									key={e.label + index}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min text-tertiary-600 font-semibold opacity-100 text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
					{secondHalf &&
						secondHalf.map((e, index) => {
							return (
								<div
									key={e.label + index}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min opacity-100 text-tertiary-600 font-semibold  text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
					{secondHalf &&
						secondHalf.map((e, index) => {
							return (
								<div
									key={e.label + index}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min opacity-100 text-tertiary-600 font-semibold  text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
					{secondHalf &&
						secondHalf.map((e, index) => {
							return (
								<div
									key={e.label + index}
									className='flex flex-col text-[4rem] text-primary-400 items-center gap-3 relative group'
								>
									<e.logo />
									<span className='text-sm max-w-min opacity-100 text-tertiary-600 font-semibold  text-center duration-300 transition-opacity'>
										{e.label}
									</span>
								</div>
							)
						})}
				</div>
			</div>
		</section>
	)
})

export default Skills
