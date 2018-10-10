import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import About from './About'
import ImageMusic from '../imageMusic/ImageMusic'

export default props => (
    <Switch>
        <Route path='/about' component={About}/>
        <Route exact path='/image-music' component={ImageMusic}/>
        <Redirect from='*' to='/image-music' />
    </Switch>
)
