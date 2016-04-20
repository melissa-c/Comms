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
  // console.log(fileName)
  var nameInput = document.getElementById("nameInput").value
  // console.log(fileInput)
  Request.post("/database")
  .send({fileInput:fileInput,nameInput:nameInput})
  .end(function(err,res){
    alert("successfully uploaded")
    // location.reload()
  })
  console.log("request sent")
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
        <input name="fileInput" type="file" id="fileName" />
        <input type="text" placeholder="name" id="nameInput" />
        <button type="submit" onClick={uploadFile}>Submit</button>
        <h3>change password</h3>
        <input name="passwordInput" type="text" />
        <div><button onClick={goToSchedAdmin}>change schedule</button></div>
      </div>
    )
  }
}
