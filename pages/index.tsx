import type { NextPage } from 'next'
import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { FavoritesContext } from '../context/FavoritesContext'
import Card from '../components/Card'
import Container from '@material-ui/core/Container'
import ScreenLoader from '../components/ScreenLoader'

const Layout = dynamic(() => import('../components/LayoutMobile'),
  { loading: () => <ScreenLoader /> })

const Home: NextPage = () => {
  const favorites = useContext(FavoritesContext)
  return (
    <Container>
      <Head>
        <title>Pokeplay App</title>
        <meta name="description" content="Pokeplay react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h2>Some text here {favorites?.name}</h2>
        <div className="d-flex flex-wrap justify-between">
          {new Array(100)?.fill('')?.map((item, index) => {
            return(
              <Card key={index} index={index} />
            )
          })}
        </div>
      </Layout>
    </Container>
  )
}

export default Home
