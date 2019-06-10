import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
                
                <h1>
                    <Link to={'/'} className="text-light">React&Redux - CRUD w/axios</Link>
                </h1>
                
                <Link to="/product/add" className="btn btn-danger">&#43; Add producct</Link>
            </nav>    
        );
    }
}

export default Header;