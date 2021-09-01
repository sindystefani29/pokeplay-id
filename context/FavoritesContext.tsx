//https://dev.to/hellomuthu23/how-to-use-usereducer-and-usecontext-hooks-with-typescript-in-react-14d1
import React, { useReducer } from 'react'

export interface PokemonListProps {
    id?: number,
    name?: string,
    image?: string,
    artwork?: string,
    dreamworld?: string
}

export interface FavoriteProps {
    id?: number,
    name?: string,
    nickname?: string,
    sprites?: {
        front_default?: string
    }
}

interface FavoriteProviderProps {
    children: any
}

interface StateProps {
    list?: FavoriteProps[]
}

interface ActionProps {
    type: string,
    payload: number | FavoriteProps
}

const initState: StateProps = {
    list: []
}

export const ADD_FAVORITE: string = 'ADD_FAVORITE'
export const REMOVE_FAVORITE: string = 'REMOVE_FAVORITE'

export const FavoritesContext = React.createContext<{
    state: StateProps;
    dispatch: React.Dispatch<ActionProps>;
}>({
    state: initState,
    dispatch: () => undefined,
})

export const FavoritesProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const favoriteReducer = (state: StateProps, action: ActionProps): StateProps => {
        switch (action?.type) {
            case ADD_FAVORITE:
                if (typeof action.payload === 'object' && state?.list) {
                    return {
                        ...state,
                        list: [...state?.list, action.payload]
                    }
                } else {
                    return state
                }
            case REMOVE_FAVORITE:
                if (typeof action.payload === 'number' && state?.list) {
                    const arr = [...[], ...state?.list]
                    arr.splice(action.payload, 1)
                    return {
                        ...state,
                        list: [...[], ...arr]
                    }
                } else {
                    return state
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(favoriteReducer, initState)

    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorite = () => {
    const context = React.useContext(FavoritesContext)
    const { state, dispatch } = context
    const addFavorite = (data: FavoriteProps) => dispatch({ type: ADD_FAVORITE, payload: data })
    const removeFavorite = (index: number) => dispatch({ type: REMOVE_FAVORITE, payload: index })
    return {
        state,
        addFavorite,
        removeFavorite
    }
}