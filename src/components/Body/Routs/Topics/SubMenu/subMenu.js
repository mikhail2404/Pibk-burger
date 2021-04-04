import React, { Component } from 'react'

export default class SubMenu extends Component {
   render() {      
      return(
         <h3 style={{textAlign: 'center'}}>Topic {this.props.match.params.id}</h3>
      )
   }
}