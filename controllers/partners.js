const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /users/new -- render a form to create a new user

router.get('/', (req, res) => {
    res.render('partners/home.ejs')
})

router.get('/new', (req, res) => {
    res.render('partners/new.ejs')
})





module.exports = router