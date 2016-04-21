'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Request from 'superagent'

import Header from './header'
var recentArray = []

function goToSchedAdmin(){
window.location = '/#/scheduleAdmin';
}

function uploadFile(e) {
  e.preventDefault()
  var fileInput = document.getElementById("fileName").value
  var nameInput = document.getElementById("nameInput").value

  Request.post("/database")
  .send({fileInput:fileInput,nameInput:nameInput})
  .end(function(err,res){
    }
  )
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
        <input name="fileInput" type="file" id="fileName" className="inputFile" />

        <input type="text" placeholder="name" id="nameInput" />
        <button type="submit" onClick={uploadFile}>Submit</button>

        <h3>change password</h3>
        
        <input name="passwordInput" type="text" />

      </div>
    )
  }
}
