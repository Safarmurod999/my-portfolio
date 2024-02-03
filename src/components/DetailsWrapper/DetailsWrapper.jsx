import React from 'react'
import "./DetailsWrapper.scss"
function DetailsWrapper({array,title}) {
  return (
    <div className="details-wrapper">
        <h2 className="details-title">{title}</h2>
        <ul className='details-list'>
        {
            array.map((el)=>{
                return <li key={el.id} className='details-item'>
                    <div className='details-time'>{el.time}</div>
                    <div className='details-data'>
                        <h3>{el.title}</h3>
                        <p>{el.data}</p>
                    </div>
                </li>
            })
        }
    </ul>
    </div>
  )
}

export default DetailsWrapper