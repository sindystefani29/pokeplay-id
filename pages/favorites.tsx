import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Card from '../components/Card'
import Head from 'next/head'
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
                <title>My Pokemon List</title>
                <meta name="description" content="Pokeplay react app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="d-flex flex-wrap justify-between">
                    {favorite?.state?.list && favorite?.state?.list?.length > 0 ?
                        favorite?.state?.list?.map((item, index) => {
                            return (
                                <Card key={index} index={index} data={item} />
                            )
                        })
                        :
                        <div className="container-loader d-flex align-center">
                            <p className="m-auto"><strong>You don&apos;t have any pokemon yet</strong></p>
                        </div>
                    }
                </div>
                {/* <button onClick={() => {
                    favorite?.addFavorite({
                        "id": 4,
                        "name": "charmander",
                        "nickname": "poppy",
                        "sprites": {
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                        }
                    })
                }}>Add</button> */}
            </Layout>
        </Container>
    )
}

export default Home
