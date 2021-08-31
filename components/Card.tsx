import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Img from './Img';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { useState } from 'react';
import styles from '../styles/Card.module.css'
import Link from './Link';
import { FavoriteProps } from '../context/FavoritesContext';

interface CardProps {
    index: number,
    data: FavoriteProps,
    fadeEffect?: boolean
}

const useStyles = makeStyles({
    root: {
        width: '48%',
        marginTop: '7px',
        marginBottom: '7px'
    },
    buttonOutline: {
        borderColor: 'rgb(3, 172, 14)',
        marginRight: '.5em',
        color: 'rgb(3, 172, 14)'
    },
    buttonContained: {
        color: 'white',
        backgroundColor: 'rgb(3, 172, 14)',
        '&:hover': {
            backgroundColor: 'rgb(3, 172, 14)'
        }
    },
    button: {
        fontSize: 12,
        fontWeight: 800,
        height: 35,
        textTransform: 'capitalize'
    },
    imgCardSize: {
        height: 100
    }
});

const CardComponent: React.FC<CardProps> = ({ index, data, fadeEffect }) => {
    const classes = useStyles()
    const [toggleDrawerOpened, setToggleDrawerOpened] = useState<boolean>(false)
    return (
        <React.Fragment>
            <Card className={`${classes.root} ${fadeEffect ? styles?.fadeEffect : ''}`}>
                <CardContent className={`d-flex direction-column align-center ${index % 4 === 1 ? 'grass' : index % 3 === 1 ? 'fire' : index % 5 === 1 ? 'water' : index % 6 === 2 ? 'bug' : index % 2 === 0 ? 'poison' : 'electric'}`}>
                    <Img src={data?.dreamworld ?? ''} alt={data?.name ?? ''} className={classes?.imgCardSize} />
                    <h3>{data?.name}</h3>
                    <Button onClick={() => setToggleDrawerOpened(true)} size="small" variant="contained" className={`${classes.button} ${classes.buttonContained}`}>
                        Preview
                    </Button>
                </CardContent>
            </Card>
            <Drawer anchor='bottom' open={toggleDrawerOpened} onClose={() => setToggleDrawerOpened(false)}>
                <div className={styles?.drawerImg}>
                    <img src={data?.dreamworld} alt={data?.name} className={toggleDrawerOpened ? styles?.imgMove : styles?.imgHidden} />
                    <div className={styles?.shadow}></div>
                </div>
                <h3 className={styles?.drawerText}>ivysaur</h3>
                <div className={styles?.drawerButton}>
                    <Button onClick={() => setToggleDrawerOpened(false)} size="small" variant="outlined" className={`${classes.button} ${classes.buttonOutline}`}>
                        Batal
                    </Button>
                    <Link href={`/detail/${data?.id}`}>
                        <Button size="small" variant="contained" className={`${classes.button} ${classes.buttonContained}`} onClick={() => setToggleDrawerOpened(false)}>
                            Lihat Selengkapnya
                        </Button>
                    </Link>
                </div>
            </Drawer>
        </React.Fragment>
    )
}

export default CardComponent