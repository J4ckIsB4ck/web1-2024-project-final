import { AppBar,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar () {
    return (
        <AppBar className = "StyledAppBar">
            <Toolbar className = "StyledToolbar">
                <div className = "Text-logo">
                    <img src='QuickBlogo.png' alt='QuickB' width="30" height="30"/>  
                    <p>QuickB</p>
                </div>
                <div className = "Links-navbar">
                    <Link to = "/" className = "Link" >Home</Link>
                    <Link to = "/blog" className = "Link" >Blog</Link>
                    <Link to = "/about" className = "Link" >About us</Link>  
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar