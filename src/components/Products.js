import React, { Component, Fragment } from 'react';

//Redux
import { connect } from 'react-redux';
import { listProducts } from '../actions/productAction';
import Product from './Product'

class Products extends Component {

    componentDidMount(){
        this.props.listProducts();
    }

    render() {

        const { products } = this.props;
        console.log(products);
        
        return (
           <Fragment>
                
                    <h2 className="text-center my-5">Product List</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <ul>
                                { products.map( product => (
                                    <Product 
                                        key={product.id}
                                        data={product}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>

           </Fragment>            
        );
    }
};



const mapStateToProps = state => ({
    products: state.products.products
});
export default connect(mapStateToProps, {listProducts})(Products);
