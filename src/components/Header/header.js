import React, { Component } from 'react'
import './header.scss'
import Menu from './Menu/menu'

export default class Header extends Component {
   render() {
      return(
         <div className="header">
            {/* <h3 className="title">My site</h3> */}
            <Menu />
            <div className="icons"> 
            <a href="#"><i className="fab fa-instagram"></i></a>          
            <a href="#"><i className="fab fa-twitter"></i></a>              
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
            </div>
            <div className="search">
               <input className="input" placeholder=" searching..."></input>
               {/* <button className="btn">search</button> */}
            </div>
         </div>
      )
   }
}