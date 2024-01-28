import React from 'react'
import './SecondaryBtn.scss'
function SecondaryBtn({link,text}) {
  return (
    <a href={link} className='secondary-btn'>{text}</a>
  )
}

export default SecondaryBtn