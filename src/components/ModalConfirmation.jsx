import React from 'react'
import Modal from 'react-bootstrap/Modal';
import{ useState } from 'react';
const ModalConfirmation = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {setShow(true)};
  const handleClose = () => {setShow(false)};
  return (
    <div>
      <Modal>
        <Modal.Header>Warning</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete?</p>
          <button className='btn btn-warning'>Yes</button>
          <button className='btn btn-primary'>No</button>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary'
          onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalConfirmation
