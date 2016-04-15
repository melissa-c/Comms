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
//import homepage button component
import HomePageBtn from './src/components/homePageBtn'

var btnNames = ['Schedule', 'I would like...', 'I can...', 'Social Stories']
var buttons = btnNames.map(function(name, id){
	
	return <HomePageBtn key={id} txt={name} />
});


	ReactDOM.render(
		<div> {buttons} </div>, document.getElementById('content')

)

