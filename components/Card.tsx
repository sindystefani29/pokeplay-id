import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Img from './Img';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        width: '48%',
        marginTop: '7px',
        marginBottom: '7px'
    },
    button:{
        backgroundColor: 'rgb(3, 172, 14)',
        fontSize: 12,
        fontWeight: 800,
        color: 'white',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'rgb(3, 172, 14)'
        }
    }
});

const CardComponent = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className="d-flex direction-column align-center grass">
                <Img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' alt='trial' />
                <h3>ivysaur</h3>
                <Button size="small" variant="contained" className={classes.button}>
                    Preview
                </Button>
            </CardContent>
        </Card>
    )
}

export default CardComponent