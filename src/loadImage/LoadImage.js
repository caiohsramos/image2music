import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import LoadImageForm from './LoadImageForm'
import ImageLoader from 'react-load-image'
import Alert from 'react-bootstrap/lib/Alert'
import Row from 'react-bootstrap/lib/Row'

export default class ImageMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            isLoaded: false,
            failed: false,
        }
    }

    handleSend = (url) => {
        this.setState({...this.state, url: url, isLoaded: true})
    }

    handleLoad = () => {
        this.setState({...this.state, isLoaded: true, failed: false})
    }

    handleFail = () => {
        this.setState({...this.state, url:'', failed: true})
    }

    handleRedirect = () => {
        //Redirect to AI page
    }

    render() {
        return (
            <Grid>
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
                    <ImageLoader 
                        src={this.state.url}
                        onError={this.handleFail}
                        onLoad={this.handleLoad}>
                        <img alt=''/>
                    </ImageLoader>
                }
                {this.state.isLoaded && 
                    //continue..
                    null
                }
            </Grid>
        )
    }
}