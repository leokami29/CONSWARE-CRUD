import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import reducer from "./reduce";
export const  AppContext = createContext()

const initialState = {
    Paltos: [
        {id: 1, nombre: "Carne de Res y Brócoli", PRECIO: 11},
        {id: 2, nombre: "Cerdo Agridulce", PRECIO: 31},
        {id: 3, nombre: "Chop Suey", PRECIO: 54},
    ]
}

export const AppProvider = ({children}) => {

    //reducer(1)
    const [state, dispatch] = useReducer(reducer, initialState)

    const createPlatos = (Plato) => dispatch({type:CREATE, payload:Plato})
    const updatePlatos = (Plato) => dispatch({type:UPDATE, payload:Plato})
    const deletePlatos = (id) => dispatch({type:DELETE, payload:id})

    return(
        <AppContext.Provider
            value={{
                Paltos: state.Paltos,
                createPlatos,
                updatePlatos,
                deletePlatos,
                dispatch
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}