import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//redux 
import { connect } from 'react-redux';
import { deleteProduct } from '../actions/productAction'


class Product extends Component {

    removeProduct = () => {
        const { id } = this.props.data;
        this.props.deleteProduct(id)
    }

    render() {

        const { id, name, price } = this.props.data;

        return (
            
            <li className="list-group-item">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                        <p className="text-dark m-0">{name}</p>
                        <span className="badge badge-warning text-dark">$ {price}</span>
                    </div>

                    <div className="col-md-4 justify-content-end acciones">
                        <Link to={`product/edit/${id}`}className="btn btn-primary mr-2">Edit</Link>
                        <button onClick={this.removeProduct} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </li>

        );
    }
}

export default connect(null, { deleteProduct })(Product);