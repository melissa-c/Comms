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
  var password = window.prompt('password')
  if(password==='11'){
    window.location = '/#/parentadmin'
  }
  else {
    window.alert("incorrect password")
  }
}

module.exports = class Header extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state={home: 0}
  }

  
  render (){
    return (
      <div>
        <div className="header">
          <HeaderBtn id={"home"} to="/" className={"homeBtn"} txt={"home"} onClick={back} img={"icon/home.png"} />
          <HeaderBtn id={"admin"} to="/parentadmin" className={"parentAdmin"} txt={"admin"} onClick={goToAdmin} img={"icon/lock.png"} />
          <h1><span>Comms</span><br /> Companion</h1>
          <HeaderBtn id={"timer"} to="/timer" className={"timerBtn"} txt={"timer"} onClick={goToTimer} img={"icon/FPO_timer.png"} />
        
        </div>
        {this.props.children}
      </div>
   	) 
  }
}
