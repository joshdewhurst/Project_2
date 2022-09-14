const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /users/new -- render a form to create a new user

router.get('/', (req, res) => {
    db.encounter.findAll()
    .then((encounters) => {
      res.render('./encounters/home.ejs', { encounters: encounters })
    })
    .catch((error) => {
      console.log('Error in GET /', error)
    })
})

router.get('/new', (req, res) => {
    res.render('encounters/new.ejs')
})

// Posting that new encounter
router.post('/', async (req, res) => {
    await db.encounter.create({
        date: req.body.date,
        note: req.body.note,
        partnerId: req.body.partnerId
    })
    .then((encounter) => {
        res.redirect('/encounters')
    })
    .catch((err) => {
        console.warn(err)
    })
})







module.exports = router