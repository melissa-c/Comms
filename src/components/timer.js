'use strict'

import React from 'react';  
import {Router, Route} from 'react-router'; 

import Header from './header'

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
    return  (
    	<div>
    		<Header />
    		<h2>Please wait</h2>
    		<div id='timerDiv' className='timerDiv'>
		        <svg width="400" height="400" viewbox="0 0 250 250">
		            <path id="border" transform="translate(200, 200)"/>
		            <path id="loader" transform="translate(200, 200) scale(.8)"/>
		        </svg>
            </div>
        </div>
    )
  }
}







