import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AccessTime from '@material-ui/icons/AccessTime';
import LocalDining from '@material-ui/icons/LocalDining';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Person from '@material-ui/icons/Person';
import data from '../Config/data.json'
import Grid from '@material-ui/core/Grid';
import Cart from './Cart'
import Fade from 'react-reveal/Fade';

const styles = theme => ({
  card: {
    maxWidth: 345,
    borderRadius: 15
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  action: {
    justifyContent: 'space-evenly',
    padding: 12
  },
  icon: {
    color: 'green',
    fontSize: 30
  },
  label: {
      color: 'green',
      fontSize: 13
  },    
  person: {
      fontSize: 13,
      color: 'green',
      border: '1px solid green',
      padding: 5,
      borderRadius: 20,
      marginRight: 20
  },

  recipe: {
      position: 'relative', 
      bottom: 10,
      marginLeft: 10
  },

  txt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    color: '#000',
    marginBottom: theme.spacing(2)
  },
})

class ListCard extends Component {
    filterCard = () => {
        const { search } = this.props
        return data.filter(item => 
             item.title.indexOf(search) !== -1) 
    }
    

    listCard = (classes) => {
        return (
        <Grid className={classes.space} container item xs={12} spacing={2}>
         {this.filterCard().map((item, index) =>
            <Grid key={index} item>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.title}
                />
            <CardContent>
                <Typography className={classes.txt} variant="body2" color="textSecondary" component="p">
                    {item.title}
                </Typography>
            </CardContent>
            <CardActions className={classes.action} disableSpacing>
                <AccessTime className={classes.icon} /> <div className={classes.label}>{item.time}</div>
                <LocalDining className={classes.icon} /> <div className={classes.label}>{item.skill}</div>
            </CardActions>

            <CardActions className={classes.action} disableSpacing>
                    <Person className={classes.icon} /> <div className={classes.person}><span className={classes.recipe}>{item.recipe}</span> <PlayArrow className={classes.icon} /></div>
            </CardActions>
            </Card>
            </Grid>
        )}
        </Grid>
        )
    }

    render() {
        const { classes, cart } = this.props
        return (
        <React.Fragment>
        {!cart ?
         <div>
            <div className={classes.txt}>Kits Avulsos</div>
            <div>{this.listCard(classes)}</div>
         </div>
         :
         <Fade>
            <Cart />
         </Fade>
        }
        </React.Fragment>
        )
    }
}

export default withStyles(styles)(ListCard)