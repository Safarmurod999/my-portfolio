import React from 'react'
import './Services.scss'
import { ServiceWrapper, Title } from '../../components'
import { services } from '../../const/data';
import { Link } from 'react-router-dom';
function Services() {
  return (
    <>
      <section className="service__top">
        <div className="container">
          <Title>Services All</Title>
          <Link to={'/'} className="service__subtitle" >Home / <span>Services</span></Link>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <ServiceWrapper array={services} animation={""} />
        </div>
      </section>
    </>
  )
}

export default Services