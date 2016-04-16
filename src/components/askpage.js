'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AskBoard from './askBoard'
import ImgGallery from './imgGallery'
import RecentImgs from './recentImgs'
import BackBtn from './backBtn'

function back(){
  window.location = '/#/';
}

function imgChoice(e) {
  var imgname = e.target.src
  console.log(imgname,'here')
  return imgname
}

module.exports = class AskPage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return (<div>

      <AskBoard />
      <RecentImgs />
      <ImgGallery onClick={hello}/>
      <BackBtn onClick={back}/>
    </div>)
      
  }
}


