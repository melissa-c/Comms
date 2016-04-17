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



module.exports = class AskPage extends React.Component {
  constructor(props){
   super(props)
   this.state = {imageURL:''}
  }

  update(e){
    this.setState({imageURL: e.target.src})
    console.log("beep", e.target)
  
  }
  render (){
   return (
    <div>
      <Header />
    <div>
      
      <AskBoard text= {this.state.imageURL}/>
      <RecentImgs text= {this.state.imageURL} />
      <ImgGallery onClick={this.update.bind(this)}/>
      <BackBtn onClick={back}/>
    </div>
    </div>)
      
  }
}
