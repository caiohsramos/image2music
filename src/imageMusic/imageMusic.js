import React from 'react'
import qs from 'query-string'
import { Redirect } from 'react-router-dom'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Grid from 'react-bootstrap/lib/Grid'
import { getProperties } from './watsonVision'

export default props => {
    const url = qs.parse(props.location.search).url
    const properties = getProperties(url)
    return (
        <Grid>
            {!url && <Redirect to='/'/>}
            <PageHeader>
                Results <small>{url}</small>
            </PageHeader>
            <h2>{properties}</h2>
        </Grid>
    )
}