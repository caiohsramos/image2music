import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class LoadImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    handleChange = (e) => {
        this.setState({...this.state, url: e.target.value})
    }

    render () {
        return (
            <Row>
                <Form horizontal>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>Image URL</ControlLabel>{' '}
                        </Col>
                        <Col md={8}>
                            <FormControl 
                                type='text' 
                                onChange={this.handleChange} 
                                value={this.state.url}
                                placeholder='Enter URL'/>
                        </Col>
                        <Col md={2}>
                            <Button 
                                type='submit'
                                bsStyle='success'
                                onClick={() => this.props.handleLoad(this.state.url)}
                                disabled={!this.state.url}>
                                Verify!
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Row>
        )
    }
}