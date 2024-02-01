import React from 'react'
import './ServiceCard.scss'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

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
            <Link aria-label='page-link' to={'/services'} className='service-card-icon'><GoArrowUpRight /></Link>
        </li>
    )
}

export default ServiceCard