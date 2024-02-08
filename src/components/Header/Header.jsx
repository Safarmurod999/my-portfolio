import React, { useContext, useEffect, useState } from 'react'
import './Header.scss'
import { PrimaryBtn, Dropdown } from '../index';
import { BsSun } from "react-icons/bs";
import { ModeContext } from '../../context/ModeContext';
import { Link } from 'react-router-dom';
function Header() {
  let [open1, setOpen1] = useState(false);
  let [open2, setOpen2] = useState(false);
  let [open3, setOpen3] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setColorMode } = useContext(ModeContext);
  let url = window.location.href;
  let html = document.querySelector("html");
  localStorage.setItem("colorMode", mode ? "light" : "dark");
  html.setAttribute("data-theme", localStorage.getItem("colorMode"));
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
    setMenuOpen(false);
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
  useEffect(() => {
    setMenuOpen(false)
  }, [url])
  return (
    <header>
      <nav className={`navbar ${!show && "shrink"}`}>
        <div className="container">
          <div className="navbar__logo"><Link to={'/'}>Urinov<span>.</span></Link></div>
          <div className={`navbar__menu ${menuOpen ? "open" : ""}`}>
            <ul className="navbar__list">
              <li className="navbar__list--item"><Link aria-label='home' to={'/'}>Home</Link></li>
              <li className="navbar__list--item"
                onMouseEnter={() => setOpen1(true)}
                onMouseLeave={() => setOpen1(false)}><Link aria-label='services' to={'/services'}>Services
                  {/* <i className="fa-solid fa-caret-down"></i>
                  <Dropdown array={['All Services', 'Service Details']} open={open1} /> */}
                </Link>
              </li>
              <li className="navbar__list--item"><a aria-label='about' href={'#about'}>About Me</a></li>
              <li className="navbar__list--item"
                onMouseEnter={() => setOpen2(true)}
                onMouseLeave={() => setOpen2(false)}><a aria-label='portfolio' href={'#portfolio'}>Portfolio
                  {/* <i className="fa-solid fa-caret-down"></i>
                  <Dropdown array={['All Portfolio', 'Portfolio Details']} open={open2} /> */}
                </a></li>
              <li className="navbar__list--item"
                onMouseEnter={() => setOpen3(true)}
                onMouseLeave={() => setOpen3(false)}><a aria-label='blog' href={'#blog'}>Blog
                  {/* <i className="fa-solid fa-caret-down"></i>
                      <Dropdown array={['Blog Standard', 'All Blogs', 'Blog Details']} open={open3} /> */}
                </a>
              </li>
            </ul>
            <div className="navbar__right">
              <button aria-label='color-mode' className='color-mode' onClick={() => handleColorMode()}>
                <BsSun />
              </button>
              <PrimaryBtn text={"Contact Me"} link={'#footer'}/>
            </div>
          </div>
          <button aria-label='menu' className="burger" onClick={() => setMenuOpen(!menuOpen)}>
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