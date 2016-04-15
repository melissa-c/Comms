'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import HomePageBtn from './homePageBtn'
import ReactCountdownClock from 'react-countdown-clock'


function clickfun(){
	console.log('yea')
}

function parentAccess () {

  console.log ('grant parent access')
  // var MAX = 30;
  // var MIN = 5;

  // var randomAmountOfSeconds = function(){
  //     return Math.floor( Math.random() * ( MAX - MIN + 1) + MIN )
  //   }


  // var randomColor = function(){
  //     return '#' + ( Math.random() * 0xFFFFFF << 0 ).toString(16);
  //   }
    
  //    getState: function(){
  //       return { 
  //         seconds: randomAmountOfSeconds(),
  //         color: randomColor()
  //       }
  //     },
  //     getInitialState: function(){
  //       return this.getState();
  //     },
  //     handleOnComplete: function(){
  //       this.setState(this.getState());
  //     },

  //   var randomColor = function(){
  //     return '#' + ( Math.random() * 0xFFFFFF << 0 ).toString(16);
  //   }
  // React.createElement(ReactCountdownClock, {
  //           seconds: this.state.seconds,
  //           color: this.state.color,
  //           alpha: 0.9,
  //           onComplete: this.handleOnComplete 
  //         })
  
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
