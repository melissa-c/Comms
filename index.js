import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'
import Timer from './src/components/timer'

import Schedule from './src/components/schedulepage'
import ParentAdmin from './src/components/parentadminpage'



ReactDOM.render(
  
  <Router history={hashHistory}>
  
      <Route path='/' component={HomePage}/>
      <Route path='askpage' component={AskPage}/>
      <Route path='timer' component={Timer}/>

      <Route path='schedule' component={Schedule} />
      <Route path='parentAdmin' component={ParentAdmin} />
  </Router>,
  document.getElementById('content')
)