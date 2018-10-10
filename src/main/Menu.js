import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    grow: {
        flexGrow: 1,
    },
}

const Menu = props => (
    <AppBar position='static' className={props.classes.grow}>
        <Toolbar>
            <Typography variant='h6' color='inherit' className={props.classes.grow}>
                Image2Music
            </Typography>
            <Button color="inherit" href='/#/'>Home</Button>
            <Button color="inherit" href='/#/image-music'>Get Started</Button>
            <Button color="inherit" href='/#/about'>About</Button>
        </Toolbar>
    </AppBar>
)

export default withStyles(styles)(Menu)