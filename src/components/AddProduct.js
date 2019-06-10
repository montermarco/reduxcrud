import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { addProduct } from '../actions/productAction';


class AddProduct extends Component {

    state = {
        name: '',
        price: '',
        error: false
    }

    productName = e => {
        this.setState({
            name: e.target.value
        });
    };

    productPrice = e => {
        this.setState({
            price: e.target.value
        });
    };
    
    addProduct = e => {
        e.preventDefault();
        
        const { name, price } = this.state;
        
        if( name === '' || price === ''){
            this.setState({ error: true });
            return;
        } this.setState({ error: false });

        //create object with info
        const infoProduct = {
            name,
            price
        }
        
        //create new product
        this.props.addProduct(infoProduct)

        // redirect
        this.props.history.push('/')
    };

    render() {

        const { error } = this.state

        return (
           <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">

                            <h2 className="text-center">Agregar Nuevo Producto</h2>

                            <form onSubmit={this.addProduct}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input
                                        onChange={this.productName} 
                                        type="text" className="form-control" placeholder="Titulo" />
                                </div>

                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input
                                        onChange={this.productPrice} 
                                        type="text" className="form-control" placeholder="Precio" />
                                </div>

                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add</button>
                            </form>

                            { error ? 
                                <div className="font-weight-bold alert alert-danger text-center mt-4"> 
                                    All fields are require
                                </div> : ''
                            }                                

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { addProduct })(AddProduct);