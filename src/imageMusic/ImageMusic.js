import React from 'react'
import qs from 'query-string'
import { Redirect } from 'react-router-dom'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Grid from 'react-bootstrap/lib/Grid'
import { getProperties } from './watsonVision'

export default class ImageMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            classes: []
        }
        this.url = qs.parse(props.location.search).url
        getProperties(this.url,this.handleResults)
    }

    handleResults = (resp) => {
        const classes = resp.data.images[0].classifiers[0].classes 
        console.log(classes)
        this.setState({
            ...this.state, 
            isLoading: false, 
            classes: classes
        })
    }

    renderClasses = () => (
        this.state.classes.map((obj, index) =>(
            <h4 key={index}>{obj.class}{' '}{obj.score}</h4>
        ))
    )

    render() {
        return (
            <Grid>
                {!this.url && <Redirect to='/'/>}
                <PageHeader>
                    Results <small>{this.url}</small>
                </PageHeader>
                {this.state.isLoading ? <h2>Loading...</h2> : this.renderClasses()}
            </Grid>
        )
    }
}