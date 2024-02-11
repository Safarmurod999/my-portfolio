import React from 'react'
import './SecondaryBtn.scss'
import { Link } from 'react-router-dom'
const SecondaryBtn = ({link,text}) => {
  return (
    <Link aria-label='page-link' to={link} className='secondary-btn'>{text}</Link>
  )
}

export default SecondaryBtn