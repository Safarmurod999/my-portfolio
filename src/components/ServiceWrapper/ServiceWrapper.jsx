import React from 'react'
import './ServiceWrapper.scss'
import ServiceCard from '../ServiceCard/ServiceCard'
function ServiceWrapper({array,animation}) {
    return (
        <ul className='service-wrapper'>{
            array.map((service,index)=> (
                <ServiceCard key={index} {...service} aos={animation}/>
            ))
        }</ul>
    )
}

export default ServiceWrapper