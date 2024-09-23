import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './navlink.css'
import Products from './products';
import Home from './home';
import member from './member';

export default function Router3(){
    return(
        <BrowserRouter>
            <nav className='nav'>
                <NavLink to='/' className={({isActive})=>isActive?"active_menu":"menu"}>Home</NavLink> -&nbsp;
                <NavLink to='/products' className={({isActive})=>isActive?"active_menu":"menu"}>Products</NavLink> -&nbsp;
                <NavLink to='/member' className={({isActive})=>isActive?"active_menu":"menu"}>Member</NavLink> -&nbsp;
                <NavLink to='/contact' className={({isActive})=>isActive?"active_menu":"menu"}>Contact Us</NavLink> &nbsp;
            </nav>
            <div className='content'>
                <Routes>
                    <Route path='/' Component={Home}/>
                    <Route path='/products' Component={Products} />
                    <Route path='/member' Component={member} />
                    <Route path='/contact'  element = {<p style={{textAlign:'center'}}>Contact Page</p>} />
                    <Route path='/*'  element = {<h1 style={{textAlign: 'center'}}>Error 404 Not Found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}