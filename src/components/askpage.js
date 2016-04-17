'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AskBoard from './askBoard'
import ImgGallery from './imgGallery'
import RecentImgs from './recentImgs'
import BackBtn from './backBtn'
import Header from './header'

var imgLocation = 'test'


function back(){
  window.location = '/#/';
}

function imgChoice(e) {
   imgLocation = e.target.src
  console.log(e.target.src,'here', imgLocation)
  return imgLocation
}

module.exports = class AskPage extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return (<div>
      <Header />
    <div>
      
      <AskBoard text={imgChoice} />
      <ImgGallery onClick={imgChoice}/>
      <BackBtn onClick={back}/>
    </div>
    </div>)
      
  }
}
