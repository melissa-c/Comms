// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Router, Route, hashHistory} from 'react-router'
// import ReactCountdownClock from 'react-countdown-clock'
// import Timer from './timer'


   
module.exports = class Timer extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
      return (
        <div>
          <ReactCountdownClock seconds={60}
                       color="#000"
                       alpha={0.9}
                       size={300}
                       onComplete={myCallback} />
        </div>
          
      )
  }
}