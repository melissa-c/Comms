'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  (
  <div>
   	<div className="imgGallery">
      image gallery
   	</div>
    <button className='yellow'></button>
    <button className='blue'></button>
    <button className='red'></button>
    <button className='green'></button>
   </div>
  )
      
  }
}
