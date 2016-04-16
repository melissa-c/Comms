'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Request from 'superagent'

module.exports = class ImgGallery extends React.Component {
  constructor(props){
   super(props)
   this.state = {images: []}

   
  }
  // getInitialState(){
  //   return {
  //     images: [{id: 0, name: "", category: "", filepath: ""}]
  //   }
  //}
  componentDidMount(){
    Request
    .get('/database')
    .end(function(err, res){
      console.log(res.text, 'text')
      this.setState({images: JSON.parse(res.text)})
      
    }.bind(this))
  
    
  }

  render (){
   return  (
  <div>
    <div className="imgGallery">
      {this.state.images.map(function(image){
        return(<div><img src={image.filepath}></img></div>)
      })}
   	</div>
    
    <button className='yellow'></button>
    <button className='blue'></button>
    <button className='red'></button>
    <button className='green'></button>
   </div>
  )
      
  }
}
