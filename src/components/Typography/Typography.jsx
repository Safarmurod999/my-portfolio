import React from 'react'
import './Typography.scss'
function Typography({ children, maxWidth, }) {
    return (
        <p className='typography' style={{ maxWidth: maxWidth }}>{children}</p>
    )
}

export default Typography