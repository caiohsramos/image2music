import React from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Collapse from 'react-bootstrap/lib/Collapse'

export default class PropertiesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    toggleOpen = () => {
        this.setState({ ...this.state, isOpen: !this.state.isOpen })
    }


    render() {
        return (
            <ListGroup>
                <ListGroupItem active onClick={this.toggleOpen}>Image Properties</ListGroupItem>
                <Collapse in={this.state.isOpen}>
                    <div>
                        {this.props.classes.map((obj, index) => (
                            <ListGroupItem key={index}>
                                {obj.class}{' '}{obj.score}
                            </ListGroupItem>
                        ))}
                    </div>
                </Collapse>
            </ListGroup>
        )
    }
}