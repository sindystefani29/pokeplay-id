import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Img from './Img';
import Button from '@material-ui/core/Button';

interface CardProps {
    index: number
}

const useStyles = makeStyles({
    root: {
        width: '48%',
        marginTop: '7px',
        marginBottom: '7px'
    },
    button: {
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

const CardComponent: React.FC<CardProps> = ({ index }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={`d-flex direction-column align-center ${index % 4 === 1 ? 'grass' : index % 3 === 1 ? 'fire' : index % 5 === 1 ? 'water' : index % 6 === 2 ? 'bug' : index % 2 === 0 ? 'poison' : 'electric'}`}>
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