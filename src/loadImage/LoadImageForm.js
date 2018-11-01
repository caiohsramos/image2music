import React from 'react'

export default class LoadImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    handleChange = (e) => {
        this.setState({ ...this.state, url: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLoad(this.state.url)
    }

    render() {
        return (
            <div className='row justify-content-around align-items-center'>
                <div className='form-group col-md-8'>
                    <label>Image URL</label>
                    <input
                        type='text'
                        className='form-control'
                        onChange={this.handleChange}
                        value={this.state.url}
                        placeholder='Enter URL' />
                </div>
                <div className='form-group col-md-2'>
                    <button
                        type='submit'
                        className='btn btn-success'
                        onClick={this.handleSubmit}
                        disabled={!this.state.url}>
                        Verify!
                    </button>
                </div>
            </div>
        )
    }
}