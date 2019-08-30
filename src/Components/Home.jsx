import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import withStyles from "@material-ui/core/styles/withStyles"
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
// CORE MATERIAL UI
import Container from '@material-ui/core/Container';

const styles = theme => ({
    root: {
      flexGroup: 1,
      paddingRight: 0,
      marginBottom: theme.spacing(8),
      marginTop: theme.spacing(6)
    },

    space: {
        marginBottom: theme.spacing(7)
    },

})

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
            cart: false
        }
    }

    onChange = (e) => {
        this.setState({search: e.target.value})
    }

    onRoute = (history) => {
        const { cart } = this.state
        this.setState({cart: !cart})   
    }

    render() { 
        const { classes } = this.props
        const { search, cart } = this.state
        const hist = createBrowserHistory()
        return (
        <React.Fragment>
            <Navbar cart={cart} onchange={this.onChange} />
            <Container className={classes.root}> 
                    <Router history={hist}>
                        <Switch>
                            <Route exact path="/" component={() => <Card cart={cart} search={search} />} />
                        </Switch>
                    </Router>              
            </Container>
            <Footer history={hist} cart={cart} onRoute={this.onRoute} />
        </React.Fragment>
        )
    }
}

export default withStyles(styles)(Home)