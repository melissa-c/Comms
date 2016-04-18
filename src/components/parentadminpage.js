'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
var recentArray = []

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
      <div>
        <h3>Upload photo</h3>
        <input name="fileInput" type="file" />
        <h3>change password</h3>
        <input name="passwordInput" type="text" />
        <h3>change schedule</h3>

      </div>
    </div>
    )      
  }
}