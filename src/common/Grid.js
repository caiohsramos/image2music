import React from 'react'

export default props => (
    <div className={props.row ? 'row' : 'container'}>
        {props.children}
    </div>
)