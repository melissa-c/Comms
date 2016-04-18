'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

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

      <button className="homeBtn" onClick={back}> 
        <img src="icon/home.png" />
        <p className="labels">home</p>
      </button>

      <button className="parentAdmin">
        <img src="icon/lock.png" />
        <p className="labels">admin</p>        
      </button>

      <h1><span>Comms</span><br /> Companion</h1>

      <button className="timerBtn" onClick={goToTimer}>
        <img src="icon/FPO_timer.png" />
        <p className="labels">timer</p>  
      </button>

      
    
   
   		
   		</div>


     		
   		
   	) 
  }
}
