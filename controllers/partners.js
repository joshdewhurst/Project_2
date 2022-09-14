const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /users/new -- render a form to create a new user

router.get('/', (req, res) => {
    db.partner.findAll()
    .then((partners) => {
      res.render('./partners/home.ejs', { partners: partners })
    })
    .catch((error) => {
      console.log('Error in GET /', error)
    })
})


// Creating a new Partner
router.get('/new', (req, res) => {
    res.render('partners/new.ejs')
})

// Posting that new Partner
router.post('/', (req, res) => {
    db.partner.create({
        name: req.body.name,
        note: req.body.note
    })
    .then((partner) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.warn(err)
    })
})




module.exports = router