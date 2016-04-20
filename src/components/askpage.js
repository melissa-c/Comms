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

  componentDidMount(){
    this.setState(
      {recentURL: recentArray}
    )
  }
 
  update(e){
    var item = [e.target.src, e.target.className]
    var duplicate = recentArray.find(function(recent){
      return recent[0] === item[0]
    }) !== undefined
    
    if(duplicate) {
      return this.setState(
      {imageURL: e.target.src, recentURL: recentArray}
    )}

    if(recentArray.length>=5){
      recentArray.shift()
      recentArray.push(item)
    } else {
      recentArray.push(item)
    }
    this.setState(
      {imageURL: e.target.src, recentURL: recentArray}
    )
  }

  render (){
    return (
      <div>
        <Header />
        <AskBoard text= {this.state.imageURL}/>
        <RecentImgs text= {this.state.recentURL} onClick={this.update.bind(this)} />
        <ImgGallery onClick={this.update.bind(this)}/>
      </div>
    )      
  }
}
