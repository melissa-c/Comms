'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
  	console.log(this.props, "*")
   return  <div><button className='navBtn' onClick={this.props.onClick}>{this.props.txt}</button></div>
      
  }
}


