import React from 'react'

export default props => (
    <div className={props.in ? 'collapse' : ''}>
        {props.children}
    </div>
)