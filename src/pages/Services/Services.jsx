import React from 'react'
import './Services.scss'
import { ServiceWrapper, Title } from '../../components'
import { services } from '../../const/data';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <>
      <section className="service__top">
        <div className="container">
          <Title>Services All</Title>
          <Link to={'/'} aria-label='home' className="service__subtitle" >Home / <span>Services</span></Link>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <ServiceWrapper array={services} />
        </div>
      </section>
    </>
  )
}

export default Services