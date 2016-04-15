'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class homepagebtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
  	console.log(this.props, "*")
   return  <div><button>{this.props.txt}</button></div>
      
  }
}


