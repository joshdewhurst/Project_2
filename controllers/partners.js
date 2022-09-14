const express = require('express')
const router = express.Router()
const db = require('../models')
const methodOverride = require('method-override')

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

// Getting a partner's information
router.get('/:id', (req, res) => {
    db.partner.findOne({
      where: { id: req.params.id }
    })
    .then((partner) => {
      if (!partner) throw Error()
      res.render('partners/show.ejs', { partner: partner })
    })
    .catch((error) => {
      res.send('server error')
    })
  })


//   deleting a partner 
router.delete('/:id', async (req, res) => {
    try {
        console.log(req.body)
        await db.partner.destroy({
            where: { id: req.params.id }
        })
        res.redirect('/partners')
    } catch(err) {
        console.warn(err)
        res.send(`server error!`)
    }
})

module.exports = router