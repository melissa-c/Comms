'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Items from './scheduleItems'



module.exports = class HomePageBtn extends React.Component {
  constructor(props){
    super(props)
    this.state = {items: [
      {txt: "Breakfast", selected: false },
      {txt: "Get Ready", selected: false },
      {txt: "School", selected: false },
      {txt: "Choice", selected: false },
      {txt: "Visit", selected: false },
      {txt: "Doctor", selected: false },
      {txt: "Chores", selected: false },
      {txt: "Homework", selected: false },
      {txt: "Dinner", selected: false },
      {txt: "Bed Time", selected: false },
      {txt: "Gardening", selected: false }
     ]}
   }


   itemClickHandler(index){
    return function(){
      var newState = Object.assign({}, this.state)
      newState.items[index].selected = true;
      this.setState(newState)
    }.bind(this)
  }

  render (){
    return (
      <div>
        <Header />
        <p>Click on an item to add it to todays scedule</p>
        <div className="setUpLeft">
        {this.state.items.map(function(item, index){
          return <Items key={index} class="scheduleSmall" txt={item.txt} onClick={this.itemClickHandler(index)} />
        }, this)
      }
      </div>
      <div className="setUpRight">
        {this.state.items.filter(function(item){
          return item.selected
        }).map(function(item){
          return <Items class="scheduleSmall" txt={item.txt}  />
        })
      }

      </div>
     </div>
  )
}
}


