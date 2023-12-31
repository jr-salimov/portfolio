import React from "react";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contacts } from "./sections/Contacts";
import { Layout } from "./Layout";

export function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      {/* <Settings /> */}
    </Layout>
  );
}
