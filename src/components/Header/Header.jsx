import React, { useContext, useEffect, useState } from 'react'
import './Header.scss'
import { PrimaryBtn, Dropdown } from '../index';
import { BsSun } from "react-icons/bs";
import { ModeContext } from '../../context/ModeContext';
function Header() {
  let [open1, setOpen1] = useState(false);
  let [open2, setOpen2] = useState(false);
  let [open3, setOpen3] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setColorMode } = useContext(ModeContext);
  let html = document.querySelector("html");
  localStorage.setItem("colorMode", mode ? "light" : "dark");
  html.setAttribute("data-theme", mode ? "light" : "dark");
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  const handleColorMode = () => {
    setColorMode(!mode);
    localStorage.setItem("colorMode", mode ? "light" : "dark");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <header>
      <nav className={`navbar ${!show && "shrink"}`}>
        <div className="container">
          <div className="navbar__logo">Urinov<span>.</span></div>
          <div className={`navbar__menu ${menuOpen ? "open" : ""}`}>
            <ul className="navbar__list">
              <li className="navbar__list--item">Home</li>
              <li className="navbar__list--item"
                onMouseEnter={() => setOpen1(true)}
                onMouseLeave={() => setOpen1(false)}>Services <i className="fa-solid fa-caret-down"></i>
                <Dropdown array={['All Services', 'Service Details']} open={open1} /></li>
              <li className="navbar__list--item">About Me</li>
              <li className="navbar__list--item"
                onMouseEnter={() => setOpen2(true)}
                onMouseLeave={() => setOpen2(false)}>Portfolio<i className="fa-solid fa-caret-down"></i>
                <Dropdown array={['All Portfolio', 'Portfolio Details']} open={open2} /></li>
              <li className="navbar__list--item">Reviews</li>
              <li className="navbar__list--item"
                onMouseEnter={() => setOpen3(true)}
                onMouseLeave={() => setOpen3(false)}>Blog<i className="fa-solid fa-caret-down"></i>
                <Dropdown array={['Blog Standard', 'All Blogs', 'Blog Details']} open={open3} /></li>
            </ul>
            <div className="navbar__right">
              <button className='color-mode' onClick={() => handleColorMode()}>
                <BsSun />
              </button>
              <PrimaryBtn text={"Contact Me"} />
            </div>
          </div>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {" "}
            {!menuOpen ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header