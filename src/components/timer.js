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
    	<Header />
      <div>
        <div id='timerDiv' className='hidden'>
        <svg width="400" height="400" viewbox="0 0 250 250">
            <path id="border" transform="translate(200, 200)"/>
            <path id="loader" transform="translate(200, 200) scale(.8)"/>
        </svg>
      </div>
      </div>
    )
  }
}







