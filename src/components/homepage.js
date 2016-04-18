'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
<<<<<<< HEAD
import HomePageBtn from './homePageBtn'
import Header from './header'

function clickfun(){
	console.log('yea')
}

function parentAccess () {

  console.log ('grant parent access')
}
=======

import HomePageBtn from './homePageBtn'
import Header from './header'
>>>>>>> 28b736089c522bb58ee83eb1e5f524196a59ce10

function goToAskPage(){
  window.location = "/#/askpage"

}

module.exports = class HomePage extends React.Component {
  constructor(props){
   super(props)
  }

  render (){
    return  (
      <div>
        <Header />
        <HomePageBtn txt={"Schedule"} img={"icon/clipboard.png"} />
        <HomePageBtn txt={"I would like..."} onClick={goToAskPage} img={"icon/question.png"} />
        <HomePageBtn txt={"I can..."} img={"icon/user.png"} />
      </div>
    )
  }
}


