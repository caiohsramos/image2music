import React from 'react'
import qs from 'query-string'
import { Redirect } from 'react-router-dom'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Grid from 'react-bootstrap/lib/Grid'
import { getProperties } from './watsonVision'
import { getSongs } from './spotifySearch'
import MusicList from './MusicList'
import PropertiesList from './PropertiesList'

export default class ImageMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoadingWatson: true,
            isLoadingSpotify: true,
            classes: [],
            tracks: [],
        }
        this.url = qs.parse(props.location.search).url
        getProperties(this.url, this.handleResults)
    }

    handleResults = (resp) => {
        const classes = resp.data.images[0].classifiers[0].classes
        console.log(classes)
        this.setState({
            ...this.state,
            isLoadingWatson: false,
            classes: classes
        })
        getSongs(classes, this.handleSongs)
    }

    handleSongs = (resp) => {
        const tracks = resp.data.tracks.items
        console.log(tracks)
        this.setState({
            ...this.state,
            isLoadingSpotify: false,
            tracks: tracks,
        })
    }

    render() {
        return (
            <Grid>
                {!this.url && <Redirect to='/' />}
                <PageHeader>
                    Results <small>{this.url}</small>
                </PageHeader>
                {this.state.isLoadingWatson ? <h2>Loading classes...</h2> :
                    <PropertiesList classes={this.state.classes} />}
                <hr />
                {(this.state.isLoadingSpotify)
                    ? <h2>Loading songs...</h2> : <MusicList tracks={this.state.tracks} />}
            </Grid>
        )
    }
}