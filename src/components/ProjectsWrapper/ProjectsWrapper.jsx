import React from 'react'
import "./ProjectsWrapper.scss"
const ProjectsWrapper = ({ array }) => {
    return (
        <ul className='projects-list'>
            {
                array.map((el) => {
                    if (el.id < 7) {

                        return <li key={el.id} className='projects-item'>
                            <img src={el.image} loading='lazy' alt={el.image} />
                            <div className='projects-data'>
                                <h3>{el.title}</h3>
                                <a href={el.url} aria-label='page'>{el.data}</a>
                            </div>
                        </li>

                    }
                })
            }
        </ul>
    )
}

export default ProjectsWrapper