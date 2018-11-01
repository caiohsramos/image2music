import React from 'react'
import Collapse from '../common/Collapse'

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
            <ul className='list-group'>
                <li className='list-group-item active' onClick={this.toggleOpen}>
                    Image Properties
                </li>
                <Collapse in={!this.state.isOpen}>
                    {this.props.classes.map((obj, index) => (
                        <li className='list-group-item' key={index}>
                            {obj.class}{' '}{obj.score}
                        </li>
                    ))}
                </Collapse>
            </ul>
        )
    }
}