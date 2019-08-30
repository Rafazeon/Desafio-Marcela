import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    height: '50px',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 0
  },
  bar: {
    backgroundColor: 'green',
    borderRadius: 10,
    height: 55
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    fontSize: 15,
    padding: 5,
    marginBottom: 2
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  icon: {
    color: '#fff',
    marginRight: 8,
    fontSize: 30,
    borderRadius: '17px 17px 0px 0px',
    backgroundColor: '#d34419f7',
    height: 45,
    padding: 2,
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    }
  }
})

class Footer extends Component {
    render() {
        const { classes, cart, onRoute } = this.props
        return (
            <div style={cart ? {top: 50, position: 'absolute'} : {bottom: 0}} className={classes.root}>
              <AppBar className={classes.bar} position="static">
                <Toolbar>
                  
                <Typography className={classes.title} noWrap>
                    Minha caixa
                </Typography>
                
                    <ArrowUpward style={cart ? {transform: 'rotate(180deg)', marginRight: 5, marginBottom: 6} : {marginBottom: 0}} className={classes.icon} onClick={() => onRoute()} />
                
                </Toolbar>
              </AppBar>
            </div>
          );
    }
}

export default withStyles(styles)(Footer)