import { CREATE, DELETE, UPDATE } from "./actions"

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE: {
            return {
                ...state,
                Platos: [...state.Platos, action.payload]
            }
        }
        case UPDATE: {
            return {
                ...state,
                Platos: state.Platos.map( (Plato ) => {
                    return (Plato.id === action.payload.id) ? action.payload : Plato
                })
            }
        }
        case DELETE: {
            return {
                ...state,
                Platos: state.Platos.filter( (Plato) => {
                    return Plato.id !== action.payload
                })
            }
        }
        default:
            return state
    }
}

export default reducer