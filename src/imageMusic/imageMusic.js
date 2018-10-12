import React from 'react'
import qs from 'query-string'
import { Redirect } from 'react-router-dom'

export default props => {
    const url = qs.parse(props.location.search).url
    return (
        <>
        {!url && <Redirect to='/'/>}
        <h1>ImageMusic {url}</h1>
        </>
    )
}