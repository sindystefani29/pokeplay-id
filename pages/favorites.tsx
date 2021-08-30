import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import ScreenLoader from '../components/ScreenLoader'

const Layout = dynamic(() => import('../components/LayoutMobile'),
    { loading: () => <ScreenLoader /> })

const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Favorite List</title>
                <meta name="description" content="Pokeplay react app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h2>Some text here</h2>
            </Layout>
        </Container>
    )
}

export default Home
