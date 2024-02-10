import React from 'react'
import "./ProjectsWrapper.scss"
function ProjectsWrapper({ array }) {
    return (
        <ul className='projects-list'>
            {
                array.map((el) => {
                    return <li key={el.id} className='projects-item' data-aos="zoom-in">
                        <img src={el.image} loading='lazy' alt={el.image} />
                        <div className='projects-data'>
                            <h3>{el.title}</h3>
                            <a href={el.url}>{el.data}</a>
                        </div>
                    </li>
                })
            }
        </ul>
    )
}

export default ProjectsWrapper