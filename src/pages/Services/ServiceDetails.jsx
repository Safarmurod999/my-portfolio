import React, { useState } from 'react'
import { Title } from '../../components'
import { Link } from 'react-router-dom'
import { services } from "../../const/data"
import "../Services/Services.scss";

const ServiceDetails = () => {
  const [active, setActive] = useState(0)

  return (
    <>
      <section className="service__top">
        <div className="container">
          <Title>Service Details</Title>
          <Link to={'/'} className="service__subtitle" >
            Home /
            <span> Service Details</span>
          </Link>
        </div>
      </section>
      <section className='service__details'>
        <div className="container">
          <div className="service__links">
            <div className="service__links--title">
              Service List
            </div>
            <ul className="service__list">
              {
                services.map((service) => (
                  <li key={service.id} className={`service__list--item ${service.id == active && 'active'}`} onClick={() => setActive(service.id)}>{service.description}</li>
                )
                )
              }
            </ul>

          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetails