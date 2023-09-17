import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { getItems } from './itemsData';
import { useNavigate } from 'react-router-dom';
import AddProductImg from '../assets/AddProductImg.jpg';
import { v4 as uuid } from 'uuid';
const AddItemForm = () => {
    const styles = {
        body: {
            backgroundColor: 'white',
            display: 'flex'
        },
        formBody: {
            backgroundColor: '#D3D3D3',
            width: '30%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '0%',
            marginTop: '12vh',
            marginLeft: '33%'

        },
        userInput: {
            marginTop: '-4vh',
        },
        inputs: {
            alignItems: 'center',
            margin: 'auto',
            border: 'none',
            bottomBorder: '1px solid #000000'
        },
        newImg: {
            marginLeft: '20%',
            marginTop: '0',
            float: 'left',
            height: '430px',
            width: '30%',

        },
        heading: {
            marginTop: '35px',
        },
        addBtn: {
            margin: 'auto',
            width: '90%',
            marginTop: '35px',
            marginBottom: '35px'
        }
    }
    const [itemsData, setItemsData] = useState(getItems);
    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState();
    const [genre, setGenre] = useState('');
    const navigate = useNavigate();
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8)
    const handleChange = e => {

    }
    const GoBack = () => {
        navigate("/");
    }
    const HandleSubmit = e => {
        console.log('onSubmit called');
        const obj = {
            id: unique_id,
            title,
            rating,
            genre
        };
        e.preventDefault();
        setId();
        setTitle('');
        setRating('');
        setGenre('');
        console.log(id);
        if (obj != null) {
            setItemsData([
                ...itemsData,
                itemsData.push(obj)

            ]);
        }
        else {
            console.log('Plz enter data');
        }
        localStorage.setItem(('itemsData'), JSON.stringify(itemsData));
        console.log(obj)
        console.log('submitted');
        GoBack();
    }
    const RouteTo = () => {
        console.log(itemsData);
        <link to='/'></link>

    }
    return (
        <div className='body'>
            {/* <div style = {styles.newImg}>
                
            </div> */}
            {/* <img src={AddProductImg} style = {styles.newImg} /> */}
            <div className='formBody' style={styles.formBody}>

                <form onSubmit={HandleSubmit} action="" className='w-50 justify-content-center align-items-center' >
                    <h1 className='text-white' style={styles.heading}>Add Item</h1>
                    <div className='form-group'>

                        <label htmlFor="number" className="text-white"></label>

                    </div>
                    <div style={styles.userInput}>
                        <div className='form-group'>
                            <label htmlFor="title"></label>
                            <input value={title}
                                style={styles.inputs}
                                onChange={e => setTitle(e.target.value)}
                                id='title'
                                type="text"
                                className='form-control'
                                placeholder='item title'
                                required
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="rating"></label>
                            <input value={rating}
                                style={styles.inputs}
                                onChange={e => setRating(e.target.value)}
                                id='rating' type="text"
                                className='form-control'
                                placeholder='item rating'
                                required
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="genre"></label>
                            <input value={genre}
                                style={styles.inputs}
                                onChange={e => setGenre(e.target.value)}
                                id='genre' type="text"
                                className='form-control'
                                placeholder='item genre'
                                required
                            ></input>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary ' style={styles.addBtn}>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddItemForm
