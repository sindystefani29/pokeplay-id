import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Img from './Img';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import styles from '../styles/Card.module.css'
import Link from 'next/link'
import { useFavorite } from '../context/FavoritesContext'
import { FavoriteProps, PokemonListProps } from '../context/FavoritesContext';

interface CardProps {
    index: number,
    data: FavoriteProps & PokemonListProps
}

const useStyles = makeStyles({
    root: {
        width: '48%',
        marginTop: '7px',
        marginBottom: '7px',
        position: 'relative'
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
    buttonIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px'
    },
    buttonDetail: {
        marginTop: 15
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

const CardComponent: React.FC<CardProps> = ({ index, data }) => {
    const classes = useStyles()
    const favorite = useFavorite()
    const [toggleDrawerOpened, setToggleDrawerOpened] = useState<boolean>(false)
    const isDetail = data?.sprites?.front_default
    const [indexToRemove, setIndexToRemove] = useState<number | null>(null)
    const removeFavorite = () => {
        setIndexToRemove(index)
        setTimeout(() => {
            setIndexToRemove(null)
            favorite?.removeFavorite(index)
        }, 1000);
    }
    return (
        <React.Fragment>
            <Card className={`${classes.root} ${indexToRemove !== null ? styles?.fadeEffect : ''}`}>
                <CardContent className={`d-flex direction-column align-center ${!isDetail ? index % 4 === 1 ? 'grass' : index % 3 === 1 ? 'fire' : index % 5 === 1 ? 'water' : index % 6 === 2 ? 'bug' : index % 2 === 0 ? 'poison' : 'electric' : ''}`}>
                    {isDetail ?
                        <IconButton
                            aria-label="delete"
                            size="small"
                            className={classes.buttonIcon}
                            onClick={() => {
                                removeFavorite()
                            }}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                        : ('')
                    }
                    <Img src={data?.dreamworld ?? data?.sprites?.front_default ?? ''} alt={data?.name ?? ''} className={classes?.imgCardSize} style={{
                        width: '100%',
                        minHeight: '96px'
                    }} />
                    {isDetail ?
                        <React.Fragment>
                            <h3 style={{ marginBottom: 0 }}>{data?.nickname}</h3>
                            <span className="color-grey"><i>{data?.name}</i></span>
                        </React.Fragment>
                        :
                        <h3>{data?.name}</h3>
                    }
                    {isDetail ?
                        <Link href={`/detail/${data?.name}`}>
                            <a className={classes.buttonDetail}>
                                <Button size="small" variant="contained" className={`${classes.button} ${classes.buttonContained}`}>
                                    Detail
                                </Button>
                            </a>
                        </Link>
                        :
                        <Button onClick={() => setToggleDrawerOpened(true)} size="small" variant="contained" className={`${classes.button} ${classes.buttonContained}`}>
                            Preview
                        </Button>
                    }
                </CardContent>
            </Card>
            {!isDetail ?
                <Drawer anchor='bottom' open={toggleDrawerOpened} onClose={() => setToggleDrawerOpened(false)}>
                    <div className={styles?.drawerImg}>
                        <img src={data?.dreamworld} alt={data?.name} className={toggleDrawerOpened ? styles?.imgMove : styles?.imgHidden} />
                        <div className={styles?.shadow}></div>
                    </div>
                    <h3 className={styles?.drawerText}>{data?.name}</h3>
                    <div className={styles?.drawerButton}>
                        <Button onClick={() => setToggleDrawerOpened(false)} size="small" variant="outlined" className={`${classes.button} ${classes.buttonOutline}`}>
                            Batal
                        </Button>
                        <Link href={`/detail/${data?.name}`}>
                            <Button size="small" variant="contained" className={`${classes.button} ${classes.buttonContained}`} onClick={() => setToggleDrawerOpened(false)}>
                                Lihat Selengkapnya
                            </Button>
                        </Link>
                    </div>
                </Drawer>
                :
                ('')
            }
        </React.Fragment>
    )
}

export default CardComponent