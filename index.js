//import react and react-dom 
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomePage from './src/components/homepage'
//import AskPage from './src/components/askpage'
//import Timer from './src/components/timer'





	ReactDOM.render(
		<Router history={hashHistory}>

		<Route path='/' component={HomePage} > 
		</Route>
		</Router>,

	 document.getElementById('content')
)

