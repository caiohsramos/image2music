import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import LoadImageForm from './LoadImageForm'
import ImageLoader from 'react-load-image'
import Alert from 'react-bootstrap/lib/Alert'
import Row from 'react-bootstrap/lib/Row'
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
        }
    }

    handleSend = (url) => {
        this.setState({...this.state, url: url, isLoaded: true, failed: false})
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
                    null
                }
            </Grid>
        )
    }
}