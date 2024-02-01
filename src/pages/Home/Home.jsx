import React from 'react'
import { PrimaryBtn, SecondaryBtn, ServiceWrapper, Title, TopTitle, Typography } from '../../components/index'
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import me from "../../assets/images/Home/me-3.png"
import './Home.scss'
import { Link } from 'react-router-dom'
import Circle from '../../components/Circle/Circle';
import Resume from '../../assets/files/SafarmurodUrinov.pdf';
import { services, skills } from '../../const/data';
function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home__content">
            <h1 className="home__title">Hello I’ m
              Safarmurod</h1>
            <Typography maxWidth={'582px'}>I’m a Web developer & I’m very passionate and dedicated to my work. I have
              acquired the skills and knowledge necessary to make your project a success.</Typography>
            <div className="home__btns">
              <Link aria-label='about-page' to={'/about'}><PrimaryBtn text={'About Me'} /></Link>
              <Link aria-label='portfolio-page' to={'/portfolio'} className='home__btn'>My Works</Link>
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
          <div className="home__image">
            <img src={me} alt="My picture" />
            <div className="circular"><Circle text={"Download - CV Download - CV "} link={Resume} id={'third'} /></div>
          </div>
        </div >
      </section >
      <section className="services">
        <div className="container">
          <div className="services__content">
            <TopTitle>Services</TopTitle>
            <Title>Services i offer</Title>
            <Typography maxWidth={'640px'}>Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis
              augue, id sollicitudin justo tristique ut.</Typography>
            <SecondaryBtn text={"All Services"} link={'/services'} />
          </div>
          <div className="services__details">
            <ServiceWrapper array={services} />
          </div>
        </div>

      </section>
      <section className="about">
        <div className="container">
          <div className="about__content">
            <TopTitle>I am a web developer</TopTitle>
            <Title>About Me</Title>
            <Typography maxWidth={'581px'} color={'var(--text-light-color)'} fontWeight='400'>
              My name is Hevin. I have been studying UI UX Design since October 2020. I like
              creating a cool design project.
            </Typography>
            <Typography maxWidth={'630px'} color={'var(--text-light-color)'} fontWeight='400'>
              Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare
              sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum
              ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed.
              Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem.
            </Typography>
          </div>
          <div className="about__skills">
            <Link aria-label='about-page' to={'/about'}>
              My Skills
            </Link>
            <ul className='skills__list'>
              {
                skills.map((skill) => (
                  <li className="skills__list--item" key={skill.id}>
                    <div><i className={skill.icon}></i></div>
                    <p>{skill.name}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home