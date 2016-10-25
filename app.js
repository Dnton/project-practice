var express = require('express')
var app = express()
var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var passport = require('passport')
var dotenv = require('dotenv')
mongoose.Promise = global.Promise

// dotenv.load({path: '.env' + process.env.NODE_ENV})
// mongoose.connect(process.env.MONGO_URL)

if (process.env.NODE_ENV === 'production') {
  // heroku mongoose connection
  mongoose.connect('mongodb://Dnton:heaven88@ds027295.mlab.com:27295/project2')
} else {
  // local server
  mongoose.connect('mongodb://localhost/project-practice')
}

app.set('view engine', 'ejs')
app.use(layout)
app.use(session({
  secret: process.env.EXPRESS_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.use(bodyParser.json()) // to parse ajax json requests
app.use(bodyParser.urlencoded({ extended: true })) // to parse form requests

// serve static files
app.use(express.static(__dirname + '/public'))

var usersRoute = require('./routes/users')
var apiUsersRoute = require('./routes/users_api')

app.use('/users', usersRoute) // only render ejs files
app.use('/api/users', apiUsersRoute) // only handle ajax request

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// app.listen(3000)
app.listen(process.env.PORT || 3000)
console.log('Server started')
