import React, { Component } from 'react'
import img from '../../../../img/banner.png'
import './about.scss'

export default class About extends Component {
   render() {
      return(
         <div className="About">
            <img src={img} alt="burger"/>
         </div>
      )
   }
}