import { Suspense, lazy, type FC } from 'react';
import { Layout } from './Layout/index';
import { ErrorBoundary } from './components/ErrorBoundary/index';
import styles from './App.module.scss';

// Lazy load sections to improve initial load time
const Home = lazy(() => import('./sections/Home/index.tsx'));
const About = lazy(() => import('./sections/About/index.tsx'));
const Skills = lazy(() => import('./sections/Skills/index.tsx'));
const Projects = lazy(() => import('./sections/Projects/index.tsx'));
const Contacts = lazy(() => import('./sections/Contacts/index.tsx'));

// Loading component shown while sections are being loaded
const Loading: FC = () => (
  <div className={styles.loading}>
    <div className={styles.spinner}></div>
  </div>
);

// Main App component that renders the layout and sections
export default function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
