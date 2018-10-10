import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import About from './About'
import ImageMusic from '../imageMusic/ImageMusic'
import Home from './Home';

export default props => (
    <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/image-music' component={ImageMusic}/>
        <Route exact path='/' component={Home} />
        <Redirect from='*' to='/' />
    </Switch>
)
