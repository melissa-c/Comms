'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'

import HeaderBtn from './headerBtn'

function goToTimer(){
  window.location = '/#/timer';
}

function back(){
  window.location = '/#/';
}

function goToAdmin(){
  var password = prompt('Please enter password')
    if(password =="11"){
    window.location = '/#/parentadmin';
  }
  else{
    alert("Incorrect Password!")
  }
}

module.exports = class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={home: 0}
  }

  componentDidMount(){
    var routeID = window.location.hash
    if(routeID.substr(1,3)==="/?_"){
      //unmount home button
      document.getElementById('home').className = "hidden"  
    }
    else {
      document.getElementById('admin').className = "hidden"     
    }
  }
  
  render (){
    return (
      <div className="header">
        <HeaderBtn id={"home"} className={"homeBtn"} txt={"home"} onClick={back} img={"icon/home.png"} />
        <HeaderBtn id={"admin"} className={"parentAdmin"} txt={"admin"} onClick={goToAdmin} img={"icon/lock.png"} />

        <h1><span>Comms</span><br /> Companion</h1>

        <HeaderBtn id={"timer"} className={"timerBtn"} txt={"timer"} onClick={goToTimer} img={"icon/stopwatchgreen.png"} />
     	</div>
   	) 
  }
}
