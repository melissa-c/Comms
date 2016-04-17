'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class Timer extends React.Component {
  constructor(props){
   super(props)
  }

  render (){
   return  <div><button className='timerBtn' onClick={this.props.onClick}>{this.props.txt}</button></div>
      
  }
}

