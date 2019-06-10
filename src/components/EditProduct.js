import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { showProduct, editProduct } from '../actions/productAction';


class EditProduct extends Component {

    state = {
        name: '',
        price: '',
        error: false
    }
    // id based in url = match.params.id ... this is another way to filter while using asynchronus calls 
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.showProduct(id);
    }

    // To populate the state for editing
    componentWillReceiveProps(nextProps, nextState){
        const { name, price } = nextProps.product;
        this.setState({
            name,
            price
        })
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
    

    updateProduct = e => {
        e.preventDefault();
        
        const { name, price } = this.state;
        
        if( name === '' || price === ''){
            this.setState({ error: true });
            return;
        } this.setState({ error: false });

        //take id
        const { id } = this.props.match.params;

        //create object with info
        const infoProduct = {
            id,
            name,
            price
        }
        //update actual product
        this.props.editProduct(infoProduct)

        // redirect
        this.props.history.push('/')
    };

    render() {

        const { name, price, error } = this.state;

        return (
           <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">

                            <h2 className="text-center">Agregar Nuevo Producto</h2>

                            <form onSubmit={this.updateProduct}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input
                                        defaultValue={name}
                                        onChange={this.productName} 
                                        type="text" className="form-control" placeholder="Titulo" />
                                </div>

                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input
                                        defaultValue={price}
                                        onChange={this.productPrice} 
                                        type="text" className="form-control" placeholder="Precio" />
                                </div>

                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Update product</button>
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

const mapStateToProps = state => ({
    product: state.products.product
});
export default connect(mapStateToProps, { showProduct, editProduct })(EditProduct);