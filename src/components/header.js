'use strict'

import React from 'react'
import ReactDOM from 'react-dom'


function back(){
  window.location = '/#/';
}

function counter(){
  document.getElementById('TESTY').className = "timerDivVisible"
  var loader = document.getElementById('loader')
//   ,   border = document.getElementById('border')
  ,   alpha  = 0
  ,        π = Math.PI
  ,        t = prompt('Time');

    (function draw() {
      alpha++;
      //alpha %= 360;
      var r = ( alpha * π / 180 )
      var x = Math.sin( r ) * 125
      var y = Math.cos( r ) * - 125
      var mid = ( alpha >= 180 ) ? 1 : 0
      var anim = 'M 0 0 v -125 A 125 125 1 ' 
               + mid + ' 1 ' 
               +  x  + ' ' 
               +  y  + ' z';
      //[x,y].forEach(function( d ){
      //  d = Math.round( d * 1e3 ) / 1e3;
      //});
           
      if(alpha <360) {
        setTimeout(draw, t) // Redraw
      } else {
          var animate ="M 0 0 v -125 A 125 125 1 1 1 -.1 -125 z";
         // alert("Thanks for waiting");
      }
        loader.setAttribute( 'd', anim );
        border.setAttribute( 'd', anim );
    })()
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

      <button className="timerBtn" onClick={counter}>
        <img src="icon/FPO_timer.png" />
        <p className="labels">timer</p>  
      </button>

      <div id='TESTY' className='hidden'>
        <svg width="400" height="400" viewbox="0 0 250 250">
            <path id="border" transform="translate(125, 125)"/>
            <path id="loader" transform="translate(125, 125) scale(.8)"/>
        </svg>
      </div>
    
   
   		
   		</div>


     		
   		
   	) 
  }
}
