import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import ModeContextProvider from './context/ModeContext.jsx'
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeContextProvider>
      <App />
    </ModeContextProvider>
  </React.StrictMode>,
)
