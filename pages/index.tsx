import type { NextPage } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Card from '../components/Card'
import Container from '@material-ui/core/Container'
import ScreenLoader from '../components/ScreenLoader'
import { useFavorite } from '../context/FavoritesContext'

const Layout = dynamic(() => import('../components/LayoutMobile'),
  { loading: () => <ScreenLoader /> })

const Home: NextPage = () => {
  const favorite = useFavorite()
  return (
    <Container>
      <Head>
        <title>Pokeplay App</title>
        <meta name="description" content="Pokeplay react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h2>Some text here</h2>
        <div className="d-flex flex-wrap justify-between">
          {/* {new Array(100)?.fill('')?.map((item, index) => {
            return(
              <Card key={index} index={index} />
            )
          })} */}
          {favorite?.state?.list?.map((item, index) => {
            return (
              <Card key={index} index={index} data={item} />
            )
          })}
          {/* <button onClick={() => {
            favorite?.addFavorite({
              "name": "venusaur",
              "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
              "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
            })
          }}>Add</button> */}
        </div>
      </Layout>
    </Container>
  )
}

export default Home
