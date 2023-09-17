import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { getItems, itemsData } from './itemsData';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalConfirmation from './ModalConfirmation';
import { useNavigate } from 'react-router-dom';
//import "./addItem.css";
const ItemsList = () => {
    const navigate = useNavigate();
    const GoToAdd = () => {
        navigate("AddItemForm");
    }
    const styles = {
        tableDiv: {
            height: '25rem',
            width: '70%',
            display: 'block',
            margin: 'auto',
            overflow: 'auto',
        },
        tableItems: {
            textAlign: 'center',
        },
        addBtn: {
            marginLeft: '75%',

        },
        tableFixed: {
            height: '50%',
            overflow: 'auto',
        },
        tbody: {

        },
        th: {
            backgroundColor: 'white',
        } 
    }
    const [itemsData, setItemsData] = useState([])
    //localStorage.setItem('itemsData',JSON.stringify(itemsData));
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true) };
    const handleClose = () => { setShow(false) };
    // const [condition, setCondition] = useState(0);
    const [selected, setSelected] = useState(null)
    const element = <FontAwesomeIcon icon={faTrash} />
    useEffect(() => {
        let arr = localStorage.getItem("itemsData")
        console.log(arr)
        if (arr) {
            setItemsData(JSON.parse(arr))
        }
        else {
            let _data = getItems()
            localStorage.setItem("itemsData", JSON.stringify(_data))
            setItemsData(_data)
        }
    }, [])
    const DeleteConfirmation = (item) => {
        setSelected(item)
        handleShow();
    }
    const HandleDelete = (selected) => {

        console.log(`Delete buton clicked at ${selected.id}`);
        if (selected != null) {
            setItemsData(

                selected = itemsData.filter(
                    m => m.id !== selected.id,
                )
            )
            setItemsData(selected);
            localStorage.setItem('itemsData', JSON.stringify(selected));

        }
        else {
            return;
        }
        handleClose();

    }
    const CallModal = () => {
        <CallModal />
    }
    const ConditionalRender = () => {
        if(itemsData.length > 0){
            return (
                <div className='tableDiv' style = {styles.tableDiv}>
            <Table striped bordered hover className="table-fixed" style={styles.tableFixed}>
                <thead className='sticky-top' style = {styles.th}>
                    <tr  style = {styles.tableItems}>
                        <th className=''>#</th>
                        <th className=''>Title</th>
                        <th className=''>Rating</th>
                        <th className=''>Genre</th>
                        <th className=''>Action</th>
                    </tr>
                </thead>
                
                {itemsData.map((item ,index) =>
                    <tbody className='overflow-auto' style={styles.tbody} >
                        <tr  style = {styles.tableItems}>
                            <td className=''>{index +1}</td>
                            <td className=''>{item.title}</td>
                            <td className=''>{item.rating}</td>
                            <td className=''>{item.genre}</td>
                            <td><button className='btn btn-warning btn-sm' onClick={() => DeleteConfirmation(item)}>
                                {element}
                            </button></td>
                        </tr>
                    </tbody>
                )}
                
            </Table>
        </div>
            ) 
        }
        else{
            return <center><h3>No data to show!</h3></center>
        }
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} selected>
                <Modal.Header>Warning</Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete</p>

                    <button className='btn btn-danger m-3' onClick={() => HandleDelete(selected)}>Yes</button>
                    <button className='btn btn-primary m-3' onClick={() => handleClose()}>No</button>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            {console.log(itemsData)}
            <div  style={styles.addBtn}>
            <button className='btn btn-primary m-3' onClick={() => GoToAdd()}>Add item</button>
            </div>
            
            <ConditionalRender />
            <ModalConfirmation />

        </div>
    )
}

export default ItemsList
