'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Items from './scheduleItems'
var test =""

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
    super(props)
  }
  mount(e){
    test = e.target.children[1];
    console.log(test)
    ReactDOM.render(<Items class="scheduleSmall" txt={'test'}/>, document.getElementById('setUpRight') )
  }

  render (){
    return (
      <div>
        <Header />
        <div className="setUpLeft" onClick={this.mount} >
          
          <Items class="scheduleSmall" txt="Breakfast" onClick={this.mount} />
          <Items class="scheduleSmall" txt="Get Ready" onClick={this.mount} />
          <Items class="scheduleSmall" txt="School" onClick={this.mount} />
          <Items class="scheduleSmall" txt="Choice" />
          <Items class="scheduleSmall" txt="Homework"/>
          <Items class="scheduleSmall" txt="Dinner"/>
          <Items class="scheduleSmall" txt="Visit"/>
          <Items class="scheduleSmall" txt="Gardening"/>
          <Items class="scheduleSmall" txt="Doctor"/>
          <Items class="scheduleSmall" txt="Chores"/>
        
        </div>
        <div id="setUpRight">

        </div>
      </div>
    )
  }
}


