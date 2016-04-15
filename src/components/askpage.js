'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AskBoard from './askBoard'
import ImgGallery from './imgGallery'
import RecentImgs from './recentImgs'
import BackBtn from './backBtn'


module.exports = class HomePage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return (<div>
      <AskBoard />
      <RecentImgs />
      <ImgGallery />
      <BackBtn  onClick={back}/>
    </div>)
      
  }
}

function back(){
  window.location = '/#/'
}

