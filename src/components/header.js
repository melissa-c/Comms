'use strict'

import React from 'react'
import ReactDOM from 'react-dom'


module.exports = class Header extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  (
    <div className="header">
      <button className="homeBtn" type="submit">
        <img src="icon/home.png" />
        <p className="labels">home</p>      
      </button>

      <h1><span>Comms</span><br /> Companion</h1>
      
      <button className="timerBtn">
        <img src="icon/FPO_timer.png" />
        <p className="labels">timer</p>      
        
      </button>
   		
 		</div>

   		)
      
  }
}
