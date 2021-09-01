import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Card from '../components/Card'
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container'
import ScreenLoader from '../components/ScreenLoader'
import { PokemonListProps } from '../context/FavoritesContext'
import { useQuery } from '@apollo/client'
import { LOAD_POKEMONS_LIST } from '../graphQL/Queries'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';

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
  },
  iconSm: {
    width: 8,
    height: 8,
    margin: 'auto 5px',
    fill: '#cdcccc'
}
});

const Home: NextPage = () => {
  const classes = useStyles()
  const limit = 20
  const [offset, setOffset] = useState<number>(0)
  const [totalData, setTotalData] = useState<number>(0)
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true)
  const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([])
  const { error, loading, data } = useQuery(LOAD_POKEMONS_LIST, {
    variables: {
      limit,
      offset
    },
  })
  const res = data?.pokemons
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
  return (
    <Container>
      <Head>
        <title>Pokeplay App</title>
        <meta name="description" content="Pokeplay react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p className="color-grey font-sm text-center d-flex justify-center align-center">
          <LensIcon className={classes?.iconSm} />Total {totalData}<LensIcon className={classes?.iconSm} />
        </p>
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
              pokemonList?.length > 0 ? pokemonList?.map((item: PokemonListProps, index: number) => {
                return (
                  <Card key={index} index={index} data={item} />
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
        </div>
      </Layout>
    </Container>
  )
}

export default Home
