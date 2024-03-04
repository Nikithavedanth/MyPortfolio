
import './App.css';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import Home from './components/home/home';
import { Internships } from './components/internships/internships';
import { Projects } from './components/projects/projects';
import { ScrollUp } from './components/scrollup/scrollup';
import { Skills } from './components/skills/skills';
function App() {
  return (
    <div>
      <Header/>
      <main>
          <Home/>
          <About/>
          <Skills/>
          <Internships/>
          <br></br>
          <br></br>
          <br></br>
          <Projects/> 
          <Education/>
          <Contact/>
        
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
