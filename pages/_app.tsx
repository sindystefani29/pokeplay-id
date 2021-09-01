import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from "next/router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import { FavoritesProvider } from '../context/FavoritesContext'
import {client} from '../graphQL/ApolloClient'
import {
  ApolloProvider
} from '@apollo/client'

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </ApolloProvider>
  )
}
export default MyApp
