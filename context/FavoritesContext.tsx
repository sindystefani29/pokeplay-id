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
    payload?: number | FavoriteProps
}

const initState: StateProps = {
    list: []
}

const persistState = (storageKey: string, state: object): void => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
}

const getIntialState = (storageKey: string): any => {
    const savedState = window.localStorage.getItem(storageKey);
    try {
        if (!savedState) {
            return undefined;
        }
        return JSON.parse(savedState ?? {})
    } catch (e) {
        console.error('Error loading state :' + storageKey);
        return undefined;
    }
}

const storageKey = 'myPokemonList'
const HYDRATE_STATE: string = 'HYDRATE_STATE'
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
            case HYDRATE_STATE:
                return {
                    ...state,
                    ...getIntialState(storageKey)
                }
            case ADD_FAVORITE:
                if (typeof action.payload === 'object' && state?.list) {
                    const resAdd = {
                        ...state,
                        list: [...state?.list, action.payload]
                    }
                    persistState(storageKey, resAdd)
                    return resAdd
                } else {
                    return state
                }
            case REMOVE_FAVORITE:
                if (typeof action.payload === 'number' && state?.list) {
                    const arr = [...[], ...state?.list]
                    arr.splice(action.payload, 1)
                    const resRemove = {
                        ...state,
                        list: [...[], ...arr]
                    }
                    persistState(storageKey, resRemove)
                    return resRemove
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
    const hydrateFavorite = () => dispatch({ type: HYDRATE_STATE })
    const addFavorite = (data: FavoriteProps) => dispatch({ type: ADD_FAVORITE, payload: data })
    const removeFavorite = (index: number) => dispatch({ type: REMOVE_FAVORITE, payload: index })
    return {
        state,
        addFavorite,
        removeFavorite,
        hydrateFavorite
    }
}