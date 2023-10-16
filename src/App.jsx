import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contacts } from "./sections/Contacts";
import { Layout } from "./Layout";

export default function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </Layout>
  );
}
