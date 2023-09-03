import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
]);

export default function App() {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
}
