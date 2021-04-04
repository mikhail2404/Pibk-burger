import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './menu.scss'

export default class  Menu extends Component {
   render() {
      return(
         <div className="list">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/topics">
               Topics
               <ul className="submenu">
                  <li><NavLink to="/topics/1">Topic 1</NavLink></li>
                  <li><NavLink to="/topics/2">Topic 2</NavLink></li>
                  <li><NavLink to="/topics/3">Topic 3</NavLink></li>
               </ul>
            </NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/flexbox">Flexbox</NavLink>
            <NavLink to="/leg">Leg</NavLink>
         </div>
      )
   }
}