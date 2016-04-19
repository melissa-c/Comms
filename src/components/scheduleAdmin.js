'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'


module.exports = class HomePageBtn extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div>
        <Header />
      </div>
    )
  }
}


