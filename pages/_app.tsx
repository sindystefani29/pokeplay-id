import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from "next/router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import { FavoritesProvider } from '../context/FavoritesContext'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://graphql-pokeapi.graphcdn.app/' })
])

const client = new ApolloClient({
  cache: new InMemoryCache,
  link
})

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
