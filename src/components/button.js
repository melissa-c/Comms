import React from 'react'
import ReactDom from 'react-dom'

module.exports = class NavButton extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return <div> 
      <button>{this.props.txt}</button>
     </div> 
  }
}
