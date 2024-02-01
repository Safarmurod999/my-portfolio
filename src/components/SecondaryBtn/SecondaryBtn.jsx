import React from 'react'
import './SecondaryBtn.scss'
function SecondaryBtn({link,text}) {
  return (
    <a aria-label='page-link' href={link} className='secondary-btn'>{text}</a>
  )
}

export default SecondaryBtn