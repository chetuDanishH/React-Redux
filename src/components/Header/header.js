import React, {Component} from 'react';
import './header.css';
import {Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return(
        <div className="header"> 
        <Col sm={12}>
        <Col sm={6}>Logo Area</Col>  
        <Col sm={6}>                           
            <Link to="" className="btn btn-red">Home</Link>
            <Link to="add-user" className="btn red-btn">Add User</Link>
            <Link to="list-of-user" className="btn red-btn">List of User</Link>  
            </Col> 
        </Col>         
        </div>
    )
    }
}

export default Header;

