'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import HomePageBtn from './homePageBtn'


function clickfun(){  /// 
  console.log('yea')
}


function counter () {
  var loader = document.getElementById('loader')
  ,   border = document.getElementById('border')
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

function parentAccess () {

  counter()
  // console.log ('grant parent access')
}
     

module.exports = class HomePage extends React.Component {
  constructor(props){
   super(props)
  }
  render () {
    return  (
  		<div>
        <HomePageBtn txt={"Parent Access"} onClick={parentAccess} />
  			<HomePageBtn txt={"Schedule"} />
  			<HomePageBtn txt={"I would like..."} onClick={clickfun} />
  			<HomePageBtn txt={"I can..."} />
      </div>
   	)
  }
}
