import type { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import ScreenLoader from '../../../components/ScreenLoader'
import Img from '../../../components/Img';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'

const useStyles = makeStyles({
    buttonContained: {
        color: 'white',
        backgroundColor: 'rgb(3, 172, 14)',
        '&:hover': {
            backgroundColor: 'rgb(3, 172, 14)'
        }
    },
    buttonOutline: {
        borderColor: 'rgb(3, 172, 14)',
        marginRight: '.5em',
        color: 'rgb(3, 172, 14)'
    },
    button: {
        fontSize: 14,
        fontWeight: 800,
        width: '100%',
        height: '50px',
        marginTop: '1em',
        marginBottom: '1em',
        textTransform: 'capitalize'
    }
});

interface Props {
    idParam: number
}

const Layout = dynamic(() => import('../../../components/LayoutMobile'),
    { loading: () => <ScreenLoader /> })

const Card = dynamic(() => import('../../../components/CardDetail'),
    { loading: () => <Skeleton variant="rect" style={{ width: '100%' }} height={200} /> })


const Home: NextPage<Props> = ({ idParam }) => {
    const classes = useStyles()
    const [successRate, setSuccessRate] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const catchPokemon = () => {
        setModalOpen(true)
        setLoader(true)
        const successRateValue = Math.random() > .5
        setTimeout(() => {
            setSuccessRate(successRateValue)
            setLoader(false)
        }, 2000);
    }
    return (
        <Container>
            <Head>
                <title>Detail Page</title>
                <meta name="description" content="Pokeplay react app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="trial" />
                <Card />
                <Button variant="contained" className={`${classes.button} ${classes.buttonContained}`} onClick={() => catchPokemon()}>Catch the Pokemon</Button>
            </Layout>
            <Dialog aria-labelledby="simple-dialog-title" open={modalOpen}>
                <Container className="m-auto text-center">
                    {loader ?
                        <React.Fragment>
                            <p>Please wait...</p>
                            <p>Hope you&apos;re lucky today</p>
                        </React.Fragment>
                        :
                        successRate ?
                            <React.Fragment>
                                <h3>Congratulations!</h3>
                                <p>You caught the pokemon. Do you want to proceed?</p>
                                <div className="d-flex">
                                    <Button onClick={() => setModalOpen(false)} size="small" variant="outlined" className={`${classes.button} ${classes.buttonOutline}`}>
                                        No
                                    </Button>
                                    <Button size="small" variant="contained" className={`${classes.button} ${classes.buttonContained}`}>
                                        Yes
                                    </Button>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <h3>Unfortunately!</h3>
                                <p>You lost the pokemon. Please don&apos;t give up. Try again later.</p>
                                <Button size="small" onClick={() => setModalOpen(false)} variant="contained" className={`${classes.button} ${classes.buttonContained}`}>
                                    Ok
                                </Button>
                            </React.Fragment>
                    }
                </Container>
            </Dialog>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (params) {
        return {
            props: {
                idParam: Number(params.id)
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}

export default Home
