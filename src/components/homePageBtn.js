'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  <div><button className='navBtn'>{this.props.txt}</button></div>
      
  }
}


