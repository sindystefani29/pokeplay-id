import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        width: '49%',
        marginTop: '5px',
        marginBottom: '5px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CardComponent = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <p>test</p>
            </CardContent>
        </Card>
    )
}

export default CardComponent