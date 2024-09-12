import React from 'react'
import { projects } from '../../const/data'

const Portfolio = () => {
  return (
    <div className="container">
      <ul className='projects-list'>
        {
          projects.map((el) => {
            return <li key={el.id} className='projects-item'>
              <img src={el.image} loading='lazy' alt={el.image} />
              <div className='projects-data'>
                <h3>{el.title}</h3>
                <a href={el.url} aria-label='page'>{el.data}</a>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Portfolio