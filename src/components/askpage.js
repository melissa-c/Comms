'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AskBoard from './askBoard'
import ImgGallery from './imgGallery'
import RecentImgs from './recentImgs'
import Header from './header'
var recentArray = []

module.exports = class AskPage extends React.Component {
  constructor(props){
   super(props)
   this.state = {imageURL:'', recentURL: []}
  }

  update(e){
    if(recentArray.length>=5){
      recentArray.shift()
      recentArray.push([e.target.src, e.target.className])
    } else {
      recentArray.push([e.target.src, e.target.className])

    }
      this.setState(
        {imageURL: e.target.src, recentURL: recentArray}
        )
    }

  render (){
   return (
    <div>
      <Header />
    <div>
    <AskBoard text= {this.state.imageURL}/>
    <RecentImgs text= {this.state.recentURL} onClick={this.update.bind(this)} />
    <ImgGallery onClick={this.update.bind(this)}/>

    </div>
    </div>
    )      
  }
}
