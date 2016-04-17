
//import react and react-dom 
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
//import homepage button component
import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'
import Timer from './src/components/timer'
import Header from './src/components/header'


	ReactDOM.render(
		(
		<Router history={hashHistory}>
			<Route path='/' component={HomePage}/>
			<Route path='askpage' component={AskPage}/>
		</Router>

		), document.getElementById('content')		
	)



