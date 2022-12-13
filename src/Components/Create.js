import React, { useState } from 'react'
import { AppContext, useAppContext } from '../Context/appContex'

const Create = () => {

     const {createPlatos} = useAppContext(AppContext)

    const [nombre, setNombre] = useState('')
    const [Precio, setPrecio] = useState('')

    const handleSubmit = e  => {
        e.preventDefault()
        createPlatos({id: Date.now(), nombre, Precio})
        setNombre('')
        setPrecio('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input value={nombre} onChange={ e => setNombre(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="nombre del plato" />
                <label htmlFor="floatingInput">Nombre Plato</label>
            </div>
            <div className="form-floating">
                <input value={Precio} onChange={ e => setPrecio(e.target.value)} type="number" className="form-control" id="floatingPassword" placeholder="precio Aqui" />
                <label htmlFor="floatingPassword">Precio</label>
            </div>
            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-primary" type="submit"><i className="fa-solid fa-plus fa-2x"></i></button>
            </div>
        </form>
    )
}

export default Create