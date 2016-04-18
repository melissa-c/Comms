'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
<<<<<<< HEAD

  	console.log(this.props, "*")
  
=======
>>>>>>> 28b736089c522bb58ee83eb1e5f524196a59ce10
    return  (
      <div>
        <button className='navBtn' onClick={this.props.onClick}>
          <img src={this.props.img} />
          {this.props.txt}
        </button>
      </div>
    )
  }
}


