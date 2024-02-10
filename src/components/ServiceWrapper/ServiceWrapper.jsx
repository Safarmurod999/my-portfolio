import React from 'react'
import './ServiceWrapper.scss'
import ServiceCard from '../ServiceCard/ServiceCard'
function ServiceWrapper({array}) {
    return (
        <ul className='service-wrapper'>{
            array.map((service,index)=> (
                <ServiceCard key={index} {...service}/>
            ))
        }</ul>
    )
}

export default ServiceWrapper