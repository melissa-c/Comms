'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'

import HeaderBtn from './headerBtn'


module.exports = class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={home: 0}
  }

  
  render (){
    return (
      <div>
        <div className="header">
          <HeaderBtn id={"home"} to="/" className={"homeBtn"} img={"icon/home.png"} />
          <HeaderBtn id={"admin"} to="/parentadmin" className={"parentAdmin"} img={"icon/lock.png"} />
          <h1><span>Comms</span><br /> Companion</h1>
          <HeaderBtn id={"timer"} to="/timer" className={"timerBtn"} img={"icon/FPO_timer.png"} />
        
        </div>
        {this.props.children}
      </div>
   	) 
  }
}
