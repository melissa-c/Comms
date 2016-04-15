'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import HomePageBtn from './homePageBtn'


function clickfun(){
	console.log('yea')
}

function parentAccess () {

  console.log ('grant parent access')
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
