import { LIST_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT } from '../actions/types';

//Every reducer has it's own state, reducers receives the old state and return the new state
const initialState = {
    products: []
}

export default function(state = initialState, action){
    switch(action.type){
        case LIST_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter( product => product.id !== action.payload)
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [ ...state.products, action.payload ] 
            }
        case SHOW_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case EDIT_PRODUCT:
            return{
                ...state,
                products: state.products.map( 
                    product => product.id === action.payload.id ? product = ( action.payload ) : product
                 )
            }                
        default:
            return state;                
    }
};


//*? DELETE PRODUCT when click in delete, the payload becomes the id, it passes to the state and then iterate all products, 
//*? when it finds the product with the id passed, then it removes and bring the rest.


