import React from 'react'
import Grid from '../common/Grid'
import PageHeader from '../common/PageHeader'
import LoadImageForm from './LoadImageForm'
import ImageLoader from 'react-load-image'
import { Redirect } from 'react-router-dom'
import spinner from '../images/spinner.gif'

const Preloader = props => (
    <img src={spinner} alt='' />
)

export default class ImageMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            isLoaded: false,
            failed: false,
            redirect: false,
        }
    }

    handleSend = (url) => {
        this.setState({ ...this.state, url: url, failed: false })
    }

    handleLoad = () => {
        this.setState({ ...this.state, isLoaded: true, failed: false })
    }

    handleFail = () => {
        this.setState({ ...this.state, url: '', failed: true, isLoaded: false })
    }

    handleRedirect = (e) => {
        e.preventDefault()
        this.setState({ ...this.state, redirect: true })
    }

    render() {
        return (
            <Grid>
                {this.state.redirect &&
                    <Redirect
                        to={{
                            pathname: '/image-music',
                            search: `?url=${this.state.url}`
                        }} />}
                <Grid row>
                    <PageHeader>
                        Image2Music <small>Paste here an URL of an image</small>
                    </PageHeader>
                </Grid>
                {this.state.failed &&
                    <div className='alert alert-warning' role='alert'>
                        <strong>Holy guacamole!</strong> Could not load URL.
                    </div>
                }
                <LoadImageForm
                    handleLoad={this.handleSend}
                />
                {this.state.url &&
                    <div className='text-center'>
                        <ImageLoader
                            src={this.state.url}
                            onError={this.handleFail}
                            onLoad={this.handleLoad}>
                            <img alt='' className='rounded mx-auto d-block' height='400' />
                            <div>Error!</div>
                            <Preloader />
                        </ImageLoader>
                    </div>
                }
                {this.state.isLoaded &&
                    //Show button to handleRedirect
                    <div className='text-center'>
                        <button
                            onClick={this.handleRedirect}
                            className='btn btn-primary btn-large mt-2'>
                            Process!
                        </button>
                    </div>
                }
            </Grid>
        )
    }
}