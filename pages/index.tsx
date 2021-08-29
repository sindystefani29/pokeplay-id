import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Layout = dynamic(() => import('../components/LayoutMobile'),
  { loading: () => <p>...</p> })

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pokeplay App</title>
        <meta name="description" content="Pokeplay react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h2>Some text here</h2>
      </Layout>
    </div>
  )
}

export default Home
