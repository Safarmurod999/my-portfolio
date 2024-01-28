import React from 'react'
import { PrimaryBtn, SecondaryBtn, ServiceWrapper, Title, TopTitle, Typography } from '../../components/index'
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import me from "../../assets/images/Home/me.png"
import './Home.scss'
import { Link } from 'react-router-dom'
import Circle from '../../components/Circle/Circle';
import Resume from '../../assets/files/SafarmurodUrinov.pdf';
import { services } from '../../const/data';

function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home__left">
            <h1 className="home__title">Hello I’ m
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
            <div className="circular"><Circle text={"Download - Resume - CV"} link={Resume} id={'third'} /></div>
          </div>
        </div >
      </section >
      <section className="services">
        <div className="container">
          <div className="services__left">
            <TopTitle>Services</TopTitle>
            <Title>Services i offer</Title>
            <Typography maxWidth={'640px'}>Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis
              augue, id sollicitudin justo tristique ut.</Typography>
            <SecondaryBtn text={"All Services"} link={'/services'} />
          </div>
          <div className="services__right">
            <ServiceWrapper array={services} />
          </div>
        </div>

      </section>
    </>
  )
}

export default Home