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
import { LOAD_POKEMON_DETAIL } from "../../../graphQL/Queries";
import { client } from "../../../graphQL/ApolloClient";
import { FavoriteProps, useFavorite } from '../../../context/FavoritesContext'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

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
    },
    headerDetail: {
        marginBottom: '1em'
    },
    imgDetail: {
        borderRadius: '50%',
        border: '1px solid #eeee'
    }
});

interface Props {
    nameParam: number,
    data: any,
    loading: boolean,
    error: any
}

const Layout = dynamic(() => import('../../../components/LayoutMobile'),
    { loading: () => <ScreenLoader /> })

const Card = dynamic(() => import('../../../components/CardDetail'),
    { loading: () => <Skeleton variant="rect" style={{ width: '100%' }} height={200} /> })


const Home: NextPage<Props> = ({ nameParam, data, loading, error }) => {
    const classes = useStyles()
    const favorite = useFavorite()
    const [successRate, setSuccessRate] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [openNicknameField, setOpenNicknameField] = useState<boolean>(false)
    const [nickname, setNickname] = useState<string>('')
    const [errorValidation, setErrorValidation] = useState<boolean>(false)
    const addFavorite = () => {
        let isFoundSameNickname = false
        if (favorite?.state?.list && favorite?.state?.list?.length > 0) {
            isFoundSameNickname = favorite?.state?.list?.findIndex((item: FavoriteProps) => item?.nickname?.toLowerCase() === nickname.toLowerCase()) > -1
        }
        if (!isFoundSameNickname) {
            favorite?.addFavorite({
                "id": data?.pokemon?.id,
                "name": data?.pokemon?.name,
                "nickname": nickname,
                "sprites": {
                    "front_default": data?.pokemon?.sprites?.front_default
                }
            })
            setModalOpen(false)
        } else {
            setErrorValidation(true)
        }
    }
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
                <title>Detail Page - {data?.pokemon?.name}</title>
                <meta name="description" content="Pokeplay react app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout titleDetailPage={data?.pokemon?.name}>
                <div className={`d-flex align-center justify-between ${classes?.headerDetail}`}>
                    <h4>{data?.pokemon?.name}</h4>
                    <Img src={data?.pokemon?.sprites?.front_default} alt={data?.pokemon?.name} className={classes?.imgDetail} />
                </div>
                <Card data={data} />
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
                            openNicknameField ?
                                <TextField
                                    label="Type a nickname here"
                                    id="standard-start-adornment"
                                    helperText={errorValidation ? 'Nickname already exists' : ''}
                                    onChange={(e) => {
                                        setNickname(e?.target?.value)
                                        setErrorValidation(false)
                                    }}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="start">
                                                <IconButton
                                                    aria-label="send"
                                                    edge="end"
                                                    onClick={() => addFavorite()}
                                                >
                                                    <SendIcon fontSize='small' />
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                />
                                :
                                <React.Fragment>
                                    <h3>Congratulations!</h3>
                                    <p>You caught the pokemon. Do you want to proceed?</p>
                                    <div className="d-flex">
                                        <Button onClick={() => setModalOpen(false)} size="small" variant="outlined" className={`${classes.button} ${classes.buttonOutline}`}>
                                            No
                                        </Button>
                                        <Button size="small" variant="contained" className={`${classes.button} ${classes.buttonContained}`} onClick={() => setOpenNicknameField(true)}>
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
        const { error, loading, data } = await client.query({
            query: LOAD_POKEMON_DETAIL,
            variables: {
                name: params.name
            }
        })
        //console.log('data', params.name, data)
        return {
            props: {
                nameParam: params.name,
                data: data
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}

export default Home
