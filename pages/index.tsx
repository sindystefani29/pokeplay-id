import type { NextPage } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Card from '../components/Card'
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container'
import ScreenLoader from '../components/ScreenLoader'
import { FavoriteProps, useFavorite } from '../context/FavoritesContext'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_POKEMONS_LIST } from '../graphQL/Queries'
import { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Layout = dynamic(() => import('../components/LayoutMobile'),
  { loading: () => <ScreenLoader /> })

const useStyles = makeStyles({
  buttonOutline: {
    borderColor: 'rgb(3, 172, 14)',
    marginRight: '.5em',
    color: 'rgb(3, 172, 14)'
  },
  button: {
    fontSize: 12,
    fontWeight: 800,
    height: 35,
    margin: '1em auto',
    textTransform: 'capitalize'
  }
});

const Home: NextPage = () => {
  const classes = useStyles()
  const [indexToRemove, setIndexToRemove] = useState<number | null>(null)
  const limit = 20
  const [offset, setOffset] = useState<number>(0)
  const [totalData, setTotalData] = useState<number>(0)
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true)
  const [pokemonList, setPokemonList] = useState<FavoriteProps[]>([])
  const favorite = useFavorite()
  const { error, loading, data } = useQuery(LOAD_POKEMONS_LIST, {
    variables: {
      limit,
      offset
    },
  })
  const res = data?.pokemons
  const removeFavorite = (index: number) => {
    setIndexToRemove(index)
    setTimeout(() => {
      setIndexToRemove(null)
      favorite?.removeFavorite(index)
    }, 1000);
  }
  useEffect(() => {
    //console.log(data)
    if (res?.results?.length > 0) {
      setTotalData(res?.count)
      setIsFirstRender(false)
      setPokemonList(prev => {
        return [...prev, ...res?.results]
      })
    }
  }, [data])
  // useEffect(() => {
  //   console.log(loading)
  // }, [loading])
  return (
    <Container>
      <Head>
        <title>Pokeplay App</title>
        <meta name="description" content="Pokeplay react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="d-flex flex-wrap justify-between">
          {loading && isFirstRender ?
            <div className="container-loader d-flex align-center">
              <CircularProgress className="m-auto" />
            </div>
            : error ?
              <div className="container-loader d-flex align-center">
                <p className="m-auto"><strong>Ooops... Something went wrong</strong></p>
              </div>
              :
              pokemonList?.length > 0 ? pokemonList?.map((item: FavoriteProps, index: number) => {
                return (
                  <Card key={index} index={index} data={item} fadeEffect={indexToRemove === index} />
                )
              }) : ('')
          }
          {pokemonList?.length < totalData ?
            !isFirstRender && loading ?
              <CircularProgress className="m-auto" />
              :
              <Button onClick={() => setOffset(res?.nextOffset)} size="small" variant="outlined" className={`${classes.button} ${classes.buttonOutline}`}>
                Load more
              </Button>
            : ('')
          }
          {/* {favorite?.state?.list?.map((item, index) => {
            return (
              <Card key={index} index={index} data={item} fadeEffect={indexToRemove === index} />
            )
          })} */}
          {/* <button onClick={() => {
            favorite?.addFavorite({
              "name": "venusaur",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
              "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
            })
          }}>Add</button>
          <button onClick={() => {
            removeFavorite(2)
          }}>Remove</button> */}
        </div>
      </Layout>
    </Container>
  )
}

export default Home
