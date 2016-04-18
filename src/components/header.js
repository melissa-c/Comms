'use strict'

import React from 'react'
import ReactDOM from 'react-dom'


function back(){
  window.location = '/#/';
}
 
  function isInteger(t) {
        return Math.round(t) === t;
    }
      
  
    (function counter() {
      document.getElementById('timerDiv').className = "timerDivVisible"
      var loader = document.getElementById('loader')
      var border = document.getElementById('border')
      var     pi = Math.PI
      var   time = prompt('Time');
      var alpha  = 0    

      alpha++;
      //alpha %= 360;
      var r = ( alpha * pi / 180 )
      var x = Math.sin( r ) * 200
      var y = Math.cos( r ) * - 200
      var mid = ( alpha >= 180 ) ? 1 : 0
      var anim = 'M 0 0 v -200 A 200 200 1 ' 
               + mid + ' 1 ' 
               +  x  + ' ' 
               +  y  + ' z';
      //[x,y].forEach(function( d ){
      //  d = Math.round( d * 1e3 ) / 1e3;
      //});
           
      if(alpha <360) {
        setTimeout(counter, time) // Redraw
      } else {
          var animate ="M 0 0 v -200 A 200 200 1 1 1 -.1 -200 z";
         // alert("Thanks for waiting");
      }
        loader.setAttribute( 'd', anim );
        border.setAttribute( 'd', anim );
    
    })()

    
  





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

      <div id='timerDiv' className='hidden'>
        <svg width="400" height="400" viewbox="0 0 250 250">
            <path id="border" transform="translate(200, 200)"/>
            <path id="loader" transform="translate(200, 200) scale(.8)"/>
        </svg>
      </div>
    
   
   		
   		</div>


     		
   		
   	) 
  }
}
