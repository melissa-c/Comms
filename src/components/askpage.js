'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AskBoard from './askBoard'
import ImgGallery from './imgGallery'
import RecentImgs from './recentImgs'
import BackBtn from './backBtn'
import Header from './header'

var imgLocation = 'test'
var recentImages = []



function back(){
  window.location = '/#/';
}

function imgChoice(e) {
   imgLocation = e.target.src
    if(recentImages.length===5){
      recentImages.shift()
      recentImages.push(imgLocation)
    } else{
      recentImages.push(imgLocation)
    }
    console.log(recentImages)
  return imgLocation
}

module.exports = class AskPage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return (
    <div>
      <Header />
    <div>
      
      <AskBoard />
      <RecentImgs />
      <ImgGallery onClick={imgChoice}/>
      <BackBtn onClick={back}/>
    </div>
    </div>)
      
  }
}
