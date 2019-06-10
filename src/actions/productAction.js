import { LIST_PRODUCTS, DELETE_PRODUCT, SHOW_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT } from './types';
import axios from 'axios';

// LIST ALL PRODUCTS
export const listProducts = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:5000/products');
        dispatch({
            type: LIST_PRODUCTS,
            payload: response.data
        })            
    } catch (error) {
        console.log(error)
    };
};

// DELETE SELECTED PRODUCT
export const deleteProduct = id => async dispatch => {
    try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    } catch (error) {
        console.log(error);
    };
};


// ADD NEW PRODUCT
export const addProduct = post => async dispatch => {
 try {
     const response = await axios.post('http://localhost:5000/products', post)
     dispatch({
         type: ADD_PRODUCT,
         payload: response.data
     })
 } catch (error) {
     console.log(error)
 }   
}

// SHOW PRODUCT FOR EDITING
export const showProduct = id => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        dispatch({
            type: SHOW_PRODUCT,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }
};

// EDIT PRODUCT
export const editProduct = product => async dispatch => {
    try {
        const response = await axios.put(`http://localhost:5000/products/${product.id}`, product);
        dispatch({
            type: EDIT_PRODUCT,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }
}