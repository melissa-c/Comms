'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Items from './scheduleItems'

module.exports = class AskPage extends React.Component {
  constructor(props){
    super(props)
  }

  update(e){
    
  }

  render (){
    return (
      <div>
      <Header />
      </div>
    )      
  }
}
