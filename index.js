
//import react and react-dom 
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
//import homepage button component
import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'
import Timer from './src/components/timer'
import Header from './src/components/header'



<<<<<<< HEAD
	ReactDOM.render((
		
=======
	ReactDOM.render(
		(
>>>>>>> 70ea821b35352dac649b2b5a19e27fe45234621a
		<Router history={hashHistory}>
			<Route path='/' component={HomePage}/>
			<Route path='askpage' component={AskPage}/>
		</Router>

		), document.getElementById('content')		
	)



