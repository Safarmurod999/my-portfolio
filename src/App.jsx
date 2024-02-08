import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Router from './router/router'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <Router />
        </AnimatePresence>
      </BrowserRouter>
    </>
  )
}

export default App
