'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import ImgGallery from './imgGallery'
import RecentImgs from './recentImgs'
import BackBtn from './backBtn'
import Timer from './timer'



module.exports = class HomePage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  (
  		<div>
  			<Timer />
		   
   		</div>
   		)
  }
}

