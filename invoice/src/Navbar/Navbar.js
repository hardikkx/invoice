import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
         
                        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#F8F8F8"}}>
                        <div className="container">
                        <Link className="navbar-brand" to="/Invoice">Invoice App</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link" to="/Products">Products <span className="sr-only">(current)</span></Link>
                                    <Link className="nav-link" to="/Customers">Customers</Link>
                                    <Link className="nav-link" to="">Invoices</Link>
                                    
                                </div>
                            </div>
                            </div>
                        
                        </nav>
                        
                        
            </React.Fragment>
        )
    }
}

export default Navbar










