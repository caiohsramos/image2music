import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import About from '../about/About'
import Home from '../home/Home';
import LoadImage from '../loadImage/LoadImage';

export default props => (
    <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/load-image' component={LoadImage}/>
        <Route exact path='/' component={Home} />
        <Redirect from='*' to='/' />
    </Switch>
)
