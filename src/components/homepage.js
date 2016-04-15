'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import HomePageBtn from './homePageBtn'


// var btnNames = ['Schedule', 'I would like...', 'I can...', 'Social Stories']
// var buttons = btnNames.map(function(name, id){
	
// 	return <HomePageBtn key={id} txt={name} />
//});

function clickfun(){
	console.log('yea')
}


module.exports = class HomePage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  (
  		<div>
  			<HomePageBtn txt={"Schedule"} />
  			<HomePageBtn txt={"I would like..."} onClick={clickfun} />
  			<HomePageBtn txt={"I can..."} />
   		</div>
   		)
  }
}

