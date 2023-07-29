import NavBar from './components/NavBar.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'
import Works from './components/Works.jsx'
import Footer from './components/Footer.jsx'
import Animated from "./components/Animated.jsx"
import { useEffect } from 'react'

function App() {
  // useEffect(()=>{
  //   const onChange = (entries) => {
  //     console.log(entries);
  //     console.log(entries[0]);
  //   }

  //   const observer = new IntersectionObserver(onChange, {
  //     rootMargin: '100px'
  //   })

  //   observer.observe(document.getElementById('22'))
  // },[])

  return (
    <>
      <Animated />
      <NavBar/>
      <main className='relative text-4xl flex flex-col gap-32 items-center snap-y snap-mandatory text-[#d9e2f4] bg pb-16'>
        <AboutMe />
        <Works />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
