'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import HomePageBtn from './homePageBtn'


function clickfun(){
	console.log('yea')
}

function parentAccess () {

  //console.log ('grant parent access')
  var timer = $('#countdown').countdown360({
    radius: 60,
    seconds: 20,
    label:['sec', 'secs'],
    fontColor: '#blue',
    autostart: false,
    onComplete : function () {
      console.log('done')
    }


  })

  countdown.start()

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
