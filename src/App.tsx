import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Experience} from "./layout/sections/experience/Experience.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {Slogan} from "./components/slogan/Slogan.tsx";
import {Toaster} from 'react-hot-toast';

function App() {

  return (

      <div>
          <Toaster position="top-right" />
          <Particle/>
          <Header/>
          <Main/>
          <Works/>
          <Skills/>
          <Experience/>
          <Contact/>
          <Slogan/>
          <Footer/>
          <GoTopBtn/>
      </div>

  )
}

export default App
