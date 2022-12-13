import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext, useAppContext } from '../Context/appContex';

const EditModal = ({show, onClose, rowData}) => {

    const {updatePlatos} = useAppContext(AppContext)
    const [formData, setFormData] = useState({
        id:'',
        nombre:'',
        Precio:'',
    })
    const {nombre, Precio} = rowData

    const hableonChange = (key, value) => {
        setFormData({
            ...formData,
            [key]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        updatePlatos(formData)
        onClose()
    }

    useEffect(() => {
      setFormData(rowData)
    },[rowData])
    
  return (
    <>
    <form>
        <Modal show={show} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Actualizar Platos</Modal.Title>
        </Modal.Header>
        <Modal.Body className=' m-auto'>
            <input type="text" placeholder='nombre del plato' onChange={ e => hableonChange('nombre', e.target.value)} dafaultvalue={nombre}/>
            <input type="number" placeholder='Precio' onChange={ e => hableonChange('Precio', e.target.value)} dafaultvalue={Precio}/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </form>
  </>
  )
}

export default EditModal