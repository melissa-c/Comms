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
//   const MAX = 30;
//   const MIN = 5;
//   class Timer extends  React.component {
//      constructor(props) {
//         super(props);
//       }
  console.log ('grant parent access')
  

//   randomAmountOfSeconds () {
//       return Math.floor( Math.random() * ( MAX - MIN + 1) + MIN )
//     }


//   randomColor (){
//       return '#' + ( Math.random() * 0xFFFFFF << 0 ).toString(16);
//     }
//     getState () {
//         return { 
//           seconds: randomAmountOfSeconds(),
//           color: randomColor()
//         }
//     }      

//     handleOnComplete (){
//         this.setState(this.getState());
//     }

//   React.createElement(ReactCountdownClock, {
//             seconds: this.state.seconds,
//             color: this.state.color,
//             alpha: 0.9,
//             onComplete: this.handleOnComplete 
//           })
  
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
        <ReactCountdownClock seconds={60}
                       color="#000"
                       alpha={0.9}
                       size={100}
                       onComplete={console.log('time over')} />
        
   		</div>
   	)
  }
}
