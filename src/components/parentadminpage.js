'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
var recentArray = []

function goToSchedAdmin(){
window.location = '/#/scheduleSetUp';
}

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
        <h3>Upload photo</h3>
        <input name="fileInput" type="file" />
        <h3>change password</h3>
        <input name="passwordInput" type="text" />
        <div><button onClick={goToSchedAdmin}>change schedule</button></div>
      </div>
    )      
  }
}