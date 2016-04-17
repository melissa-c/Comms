'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import HomePageBtn from './homePageBtn'
import ParentAdmin from './parentAdminBtn'

import {Router, Route} from 'react-router'


function goToAskPage(){
	window.location = "/#/askpage"
}


module.exports = class HomePage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  (
  		<div>
     
  			<HomePageBtn txt={"Schedule"} />
  			<HomePageBtn txt={"I would like..."} onClick={goToAskPage} />
  			<HomePageBtn txt={"I can..."} />
        <ParentAdmin />
   		</div>
   		)
  }
}

