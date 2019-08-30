import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Person from '@material-ui/icons/Person';
import data from '../Config/data.json'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    maxWidth: 345,
    boxShadow: 'none'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
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
      padding: 2,
      borderRadius: 20,
      marginRight: 20
  },

  recipe: {
      position: 'relative', 
      bottom: 10,
      marginLeft: 10
  },

  txt: {
    textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: theme.spacing(2),
    paddingTop: 5,
    paddingLeft: 5,
    marginLeft: 10
  },

  header: {
      display: 'flex'
  },

  imgStyle: {
      borderRadius: 10
  },
  
  cash: {
      fontSize: 10,
      marginTop: 6,
      fontWeight: 500
  },

  number: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 2
  },

  total: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },

  order: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },

  button: {
    marginTop: theme.spacing(2),
    borderRadius: 20,
    backgroundColor: 'green',
    color: '#fff',
    width: '100%'
  },
  input: {
    display: 'none',
  }
})

class Cart extends Component {
    listCard = (classes) => {
        return (
        <Grid container item xs={12} spacing={2}>
         {data.map((item, index) =>
            <Grid key={index} item>
            <Card className={classes.card}>
                
            <CardContent className={classes.header}>
                <img className={classes.imgStyle} alt={item.title} height={80} width={80} src={item.img} />
                <Typography className={classes.txt} variant="body2" color="textSecondary" component="p">
                    {item.title}
                </Typography>
            </CardContent>
            
            <CardActions className={classes.action} disableSpacing>
                    <Person className={classes.icon} /> 
                    <div className={classes.person}>
                        <span className={classes.recipe}>{item.recipe}</span> 
                        <PlayArrow className={classes.icon} />
                    </div>
                    <span className={classes.cash}>R$</span><span className={classes.number}>304,50</span>
            </CardActions>
            <hr />
            </Card>
            </Grid>
        )}
        <Container padder>
            <div style={{color: 'gray'}}>4 itens na sacola</div>
            <div className={classes.order}>
                <div className={classes.total}>Valor total do pedido</div> 
                <div>
                    <span style={{color: '#d34419f7'}} className={classes.cash}>R$</span>
                    <span style={{color: '#d34419f7'}} className={classes.number}>304,50</span>
                </div>
            </div>
            <Button variant="contained" className={classes.button}>
                Fechar Pedido
            </Button>
        </Container>
        </Grid>
        )
    }

    render() {
        const { classes } = this.props
        return (
        <React.Fragment>
            <div>{this.listCard(classes)}</div>
        </React.Fragment>
        )
    }
}

export default withStyles(styles)(Cart)