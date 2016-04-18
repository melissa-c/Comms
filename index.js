import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'
import Timer from './src/components/timer'

import Schedule from './src/components/schedulepage'


ReactDOM.render(
  
  <Router history={hashHistory}>
  
      <Route path='/' component={HomePage}/>
      <Route path='askpage' component={AskPage}/>
      <Route path='timer' component={Timer}/>

      <Route path='schedule' component={Schedule} />

  </Router>,
  document.getElementById('content')
)