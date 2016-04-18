import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'
import Timer from './src/components/timer'


ReactDOM.render(
  
  <Router history={hashHistory}>
  
      <Route path='/' component={HomePage}/>
      <Route path='askpage' component={AskPage}/>
      <Route path='timer' component={Timer}/>
  
  </Router>,
  document.getElementById('content')
)
