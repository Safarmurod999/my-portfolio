import React from 'react'
import './Typography.scss'
function Typography({ children, maxWidth,color,fontWeight,fontSize}) {
    return (
        <p className='typography' style={{ maxWidth,color,fontWeight,fontSize }}>{children}</p>
    )
}

export default Typography