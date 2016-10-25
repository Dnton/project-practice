var express = require('express')
var router = express.Router()

var User = require('../models/user')

var Post = require('../models/post')

router.get('/post', function (req, res){
  Post.find({}, function(err, allPost) {
    console.log(allPosts)
    res.render('post/profile', {
      allPosts: allPosts
    })
  })
})


router.post('/login', function (req, res) {

router.get('/error', function (req, res) {
  res.render('posts/error')
})

router.get('/profile', function (req, res) {
  res.render('users/profile')
})

module.exports = router
