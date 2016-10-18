var express = require('express')
var app = express()
var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/project-practice')

app.set('view engine', 'ejs')
app.use(layout)
app.use(bodyParser.json()) // to parse ajax json requests
app.use(bodyParser.urlencoded({ extended: true })) // to parse form requests

// serve static files
app.use(express.static(__dirname + '/public'))

var usersRoute = require('./routes/users')
var apiUsersRoute = require('./routes/users_api')

app.use('/users', usersRoute) // only render ejs files
app.use('/api/users', apiUsersRoute) // only handle ajax request

// app.listen(3000)
app.listen(process.env.PORT || 3000)
console.log('Server started')
