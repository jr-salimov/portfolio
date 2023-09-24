import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import Layout from './Layout';

export default function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </Layout>
    </div>
  );
}
