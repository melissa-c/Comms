'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AskBoard from './askBoard'


module.exports = class HomePage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return <div><AskBoard /></div>
      
  }
}

