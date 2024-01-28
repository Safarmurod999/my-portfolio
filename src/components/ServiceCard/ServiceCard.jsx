import React from 'react'
import './ServiceCard.scss'
import { GoArrowUpRight } from "react-icons/go";

function ServiceCard({ id, title, description, image }) {
    return (
        <li className='service-card'>
            <div>
                <h4>0{id+1}/</h4>
                <div className='service-card-content'>
                    <span>{title}</span>
                    <p>{description}</p>
                </div>
            </div>
            <div className='service-card-icon'><GoArrowUpRight /></div>
        </li>
    )
}

export default ServiceCard