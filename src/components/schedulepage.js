'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Items from './scheduleItems'

module.exports = class AskPage extends React.Component {
  constructor(props){
   super(props)
  }

  update(e){
    
    }

  render (){
    return (
        <div>
        <Header />
          <Items txt="Breakfast"/>
          <Items txt="Get Ready"/>
          <Items txt="School"/>
          <Items txt="TV"/>
          <Items txt="Homework"/>
          <Items txt="Dinner"/>
          <Items txt="Bed Time"/>

        </div>
      )      
  }
}
