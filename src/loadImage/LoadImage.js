import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import LoadImageForm from './LoadImageForm'
import ImageLoader from 'react-load-image'
import Alert from 'react-bootstrap/lib/Alert'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import { Redirect } from 'react-router-dom'
import spinner from '../images/spinner.gif'

const Preloader = props => (
    <img src={spinner} alt=''/>
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
        this.setState({...this.state, url: url, failed: false})
    }

    handleLoad = () => {
        this.setState({...this.state, isLoaded: true, failed: false})
    }

    handleFail = () => {
        this.setState({...this.state, url:'', failed: true, isLoaded:false})
    }

    handleRedirect = (e) => {
        e.preventDefault()
        this.setState({...this.state, redirect: true})
    }

    render() {
        return (
            <Grid>
                {this.state.redirect && 
                    <Redirect 
                        to={{
                            pathname: '/image-music',
                            search: `?url=${this.state.url}`
                        }}/>}
                <Row>
                    <PageHeader>
                        Image2Music <small>Paste here an URL of an image</small>
                    </PageHeader>
                </Row>
                {this.state.failed &&
                    <Alert bsStyle="warning">
                        <strong>Holy guacamole!</strong> Could not load URL.
                    </Alert>
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
                            <img alt='' className='img-fluid' height='400'/>
                            <div>Error!</div>
                            <Preloader />
                        </ImageLoader>
                    </div>
                }
                {this.state.isLoaded && 
                    //Show button to handleRedirect
                    <div className='text-center'>
                        <Button 
                            style={{marginTop:15}}
                            onClick={this.handleRedirect}
                            bsSize="large">
                            Process!
                        </Button>
                    </div>
                }
            </Grid>
        )
    }
}