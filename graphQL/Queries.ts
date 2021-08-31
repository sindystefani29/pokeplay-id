import { gql } from '@apollo/client'
export const LOAD_POKEMONS_LIST = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            nextOffset
            prevOffset
            status
            message
            results {
                id
                name
                image
                artwork
                dreamworld
            }
        }
    }
`