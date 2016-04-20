'use strict'

import React from 'react';  
import {Router, Route} from 'react-router'; 

import Header from './header'

function counter(){
  var loader = document.getElementById('loader')
  var border = document.getElementById('border')
  var  alpha = 0
  var     pi = Math.PI
  var   time = prompt('Time');

  if(!time || isNaN(time)){
    alert("Please enter the seconds to set the timer")
    return time
  }

  (function draw() {
    alpha++;
    var radian = ( alpha * pi / 180 )
    var      x = Math.sin( radian ) * 200
    var      y = Math.cos( radian ) * - 200
    var    mid = ( alpha >= 180 ) ? 1 : 0
    var   anim = 'M 0 0 v -200 A 200 200 1 ' 
               + mid + ' 1 ' 
               +  x  + ' ' 
               +  y  + ' z';
         
    if(alpha < 360) {
      setTimeout(draw, time)
    } else {
      var animate ="M 0 0 v -200 A 200 200 1 1 1 -.1 -200 z";
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
        <Header />
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
