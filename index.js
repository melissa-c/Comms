// var express =require('express')
// var bodyParser =require('body-parser')
// var path = require('path')
// var http= require('http')
// var port = process.env.PORT || 8080

// var app = express()
// var server = http.createServer(app)

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.static('index.html'))

// if (require.main === module) {
// 	server.listen(port, function(){
// 		console.log('Coms server listening on port: ', port)
// 	})

// }

//module.exports =app
//import react and react-dom 
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
//import homepage button component
import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'


	ReactDOM.render((
		
		<Router history={hashHistory}>
			<Route path='/' component={HomePage}/>
			<Route path='askpage' component={AskPage}/>

		</Router>

		), document.getElementById('content')
)



