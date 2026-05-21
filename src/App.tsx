import Layout from './components/Layout';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillLevels from './components/SkillLevels';
import InterestAreas from './components/InterestAreas';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <SkillLevels />
      <InterestAreas />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </Layout>
  );
}
