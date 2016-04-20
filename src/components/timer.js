'use strict'

import React from 'react';  
import {Router, Route} from 'react-router'; 

import Header from './header'

function counter(){
  var loader = document.getElementById('loader')
//   ,   border = document.getElementById('border')
  ,   alpha  = 0
  ,        π = Math.PI
  ,        t = prompt('Time');

    (function draw() {
      alpha++;
      //alpha %= 360;
      var r = ( alpha * π / 180 )
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
        setTimeout(draw, t) // Redraw
      } else {
          var animate ="M 0 0 v -200 A 200 200 1 1 1 -.1 -200 z";
         // alert("Thanks for waiting");
      }
        loader.setAttribute( 'd', anim );
        border.setAttribute( 'd', anim );
    })()
}

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
   super(props)
  }
  
  render (){
    return (
    	<div>
    		<h2>Please wait ...</h2>
    		<button className={"enterTime"} onClick={counter}>enter time</button>
    		<div id='timerDiv' className='timerDiv'>
	        <svg width="400" height="400" viewbox="0 0 200 200">
            <path id="border" transform="translate(200, 200)"/>
            <path id="loader" transform="translate(200, 200) scale(.8)"/>
	        </svg>
        </div>
      </div>
    )
  }
}
