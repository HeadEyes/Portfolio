import { Hero } from "./components/Hero/Hero.jsx"
import { NavBar } from "./components/NavBar/NavBar.jsx"
import { About } from "./components/About/About.jsx"
import { Projects } from "./components/Projects/Projects.jsx"
import { Skills } from "./components/Skills/Skills.jsx"
import { Contact } from "./components/Contact/Contact.jsx"

function App() {

  return (
    <div className='app'>
        <NavBar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App
