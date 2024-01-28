import React from 'react'
import './Services.scss'
import { ServiceWrapper } from '../../components'
import { services } from '../../const/data';
function Services() {
  return (
    <>
      <section className="service">
        <div className="container">
          <ServiceWrapper array={services}/>
        </div>
      </section></>
  )
}

export default Services