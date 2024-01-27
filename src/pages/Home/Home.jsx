import React from 'react'
import { PrimaryBtn, Typography } from '../../components/index'
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import me from "../../assets/images/Home/me.png"
import './Home.scss'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home__left">
          <h1 className="home__title">Hay’ i m
            Safarmurod</h1>
          <Typography maxWidth={'582px'}>I’m a Web developer & I’m very passionate and dedicated to my work. I have
            acquired the skills and knowledge necessary to make your project a success.</Typography>
          <div className="home__btns">
            <Link to={'/about'}><PrimaryBtn text={'About Me'} /></Link>
            <Link to={'/portfolio'} className='home__btn'>My Works</Link>
          </div>
          <div className='home__social'>
            <p>Follow Me</p>
            <ul className="home__links">
            <li><a href=""><FaTelegramPlane /></a></li>
            <li><a href=""><FaFacebookF /></a></li>
            <li><a href=""><FaGithubAlt /></a></li>
            <li><a href=""><FaInstagram /></a></li>
          </ul>
          </div>
        </div>
        <div className="home__right">
          <img src={me} alt="My picture" />
        </div>
      </div>
    </section>
  )
}

export default Home