import React, { useState } from 'react'
import { AppContext, useAppContext } from '../Context/appContex'
import EditModal from './EditModal'

const Show = () => {

    const  {Platos, deletePlatos} = useAppContext(AppContext)

    const [rowData, setRowData] = useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = (Plato) => {
        setShow(true)
        setRowData(Plato)
    };

    return (
        <>
            <table className="table table-striped mt-5">
                <thead className=' bg-dark text-white'>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { Platos?.map( (Plato) => (
                        <tr key={Plato.id}>
                            <td>{Plato.nombre}</td>
                            <td>{Plato.Precio}</td>
                            <td>
                                <div className=' btn-group gap-5'>
                                    <button onClick={() => handleShow(Plato)} className=" btn btn-info"><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button onClick={() => {deletePlatos(Plato.id)}} className=" btn btn-danger"><i className="fa-sharp fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>

            <EditModal show={show} onClose={handleClose} rowData={rowData}/>
        </>
    )
}

export default Show
