//https://dev.to/hellomuthu23/how-to-use-usereducer-and-usecontext-hooks-with-typescript-in-react-14d1
import React, { useReducer } from 'react'

export interface FavoriteProps {
    id?: number,
    name?: string,
    image?: string,
    artwork?: string,
    dreamworld?: string
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
    list: [
        {
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
        },
        {
            "name": "venusaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
        },
        {
            "name": "charmander",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
        },
        {
            "name": "charmeleon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
        },
        {
            "name": "charizard",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            "artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
        }
    ]
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
    const {state, dispatch} = context
    const addFavorite = (data: FavoriteProps) => dispatch({ type: ADD_FAVORITE, payload: data })
    const removeFavorite = (index: number) => dispatch({ type: REMOVE_FAVORITE, payload: index })
    return {
        state,
        addFavorite,
        removeFavorite
    }
}