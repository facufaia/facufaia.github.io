import { forwardRef } from 'react'

const NavBar = forwardRef(
	({ isActive, setIsActive, scrollToSection, references }, ref) => {
		NavBar.displayName = 'NavBar'

		const { aboutRef, worksRef, contactRef, skillsRef } = references

		return (
			<header>
				<nav className='flex fixed py-[0.8rem] z-50 text-base tracking-wide justify-around items-center px-4 text-[#d3d9e7] bg-transparent backdrop-blur-md w-full'>
					<ul
						className={
							isActive === aboutRef.current
								? 'text-secondary-600'
								: 'text-white'
						}
						onClick={() => {
							scrollToSection(aboutRef)
							setIsActive(aboutRef)
						}}
					>
						ABOUT
					</ul>
					<ul
						className={
							isActive === worksRef.current
								? 'text-secondary-600'
								: 'text-white'
						}
						onClick={() => {
							scrollToSection(worksRef)
							setIsActive(worksRef.current)
						}}
					>
						WORKS
					</ul>
					<ul
						className={
							isActive === skillsRef.current
								? 'text-secondary-600'
								: 'text-white'
						}
						onClick={() => {
							scrollToSection(skillsRef)
							setIsActive(skillsRef.current)
						}}
					>
						SKILLS
					</ul>
					<ul
						className={
							isActive === contactRef.current
								? 'text-secondary-600'
								: 'text-white'
						}
						onClick={() => {
							scrollToSection(contactRef)
							setIsActive(contactRef.current)
						}}
					>
						CONTACT
					</ul>
				</nav>
			</header>
		)
	}
)

export default NavBar
