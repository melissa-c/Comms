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

module.exports = class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render (){
    return  (
      <div className="header">
        <HeaderBtn className={"homeBtn"} txt={"home"} onClick={back} img={"icon/home.png"} />
        <HeaderBtn className={"parentAdmin"} txt={"admin"} onClick={back} img={"icon/lock.png"} />

        <h1><span>Comms</span><br /> Companion</h1>

        <HeaderBtn className={"timerBtn"} txt={"timer"} onClick={goToTimer} img={"icon/FPO_timer.png"} />
     	</div>
   	) 
  }
}
