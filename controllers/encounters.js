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

// Getting an encounters's information
router.get('/:id', (req, res) => {
    db.encounter.findOne({
      where: { id: req.params.id }
    })
    .then((encounter) => {
      if (!encounter) throw Error()
      res.render('encounters/show.ejs', { encounter: encounter })
    })
    .catch((error) => {
      res.send('server error')
    })
  })


//   deleting an encounter
router.delete('/:id', async (req, res) => {
    try {
        console.log(req.body)
        await db.encounter.destroy({
            where: { id: req.params.id }
        })
        res.redirect('/encounters')
    } catch(err) {
        console.warn(err)
        res.send(`server error!`)
    }
})





module.exports = router