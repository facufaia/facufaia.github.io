import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Works from './components/Works.jsx'
import Contact from './components/Contact.jsx'
import { useRef, useState, useEffect } from 'react'
// import DesignSystem from './components/DesignSystem.jsx'

function App() {
	const aboutRef = useRef(null)
	const worksRef = useRef(null)
	const contactRef = useRef(null)
	const skillsRef = useRef(null)
	const sectionRefs = [aboutRef, worksRef, contactRef, skillsRef]
	const [isActive, setIsActive] = useState(aboutRef)

	const scrollToSection = (targetRef) => {
		if (targetRef && targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		}

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const targetRef = Object.values(sectionRefs).find(
						(ref) => ref.current === entry.target
					)
					setIsActive(targetRef.current)
				}
			})
		}

		const observer = new IntersectionObserver(handleIntersection, options)

		if (aboutRef.current) observer.observe(aboutRef.current)
		if (worksRef.current) observer.observe(worksRef.current)
		if (contactRef.current) observer.observe(contactRef.current)
		if (skillsRef.current) observer.observe(skillsRef.current)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<>
			<NavBar
				scrollToSection={scrollToSection}
				isActive={isActive}
				setIsActive={setIsActive}
				references={{ aboutRef, worksRef, contactRef, skillsRef }}
			/>
			<main className='relative overflow-hidden text-4xl flex flex-col gap-32 items-center text-white bg px-4'>
				<div className='cloud-background-primary' />
				<About ref={aboutRef} />
				<Works ref={worksRef} />
				<Skills ref={skillsRef} />
				<Contact ref={contactRef} />
				{/* <DesignSystem /> */}
			</main>
		</>
	)
}

export default App
