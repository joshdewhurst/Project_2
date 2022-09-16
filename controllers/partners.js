const express = require('express')
const router = express.Router()
const db = require('../models')
const methodOverride = require('method-override')

// GET /users/new -- render a form to create a new user

router.get('/', async (req, res) => {
    try {
        if (!res.locals.user) {
            res.redirect('/')
        } else {
            db.partner.findAll({
                include: [db.user]
            })
            .then((partners) => {
              res.render('./partners/home.ejs', { partners: partners })
            })
        }
} catch(error) {
      console.log('Error in GET /', error)
      res.send('server error')
    }
} )


// Creating a new Partner
router.get('/new', (req, res) => {
    if (!res.locals.user) {
        res.redirect('/')
    } else {res.render('partners/new.ejs')
}
})

// Posting that new Partner
router.post('/', async (req, res) => {
    try {
        if (!res.locals.user) {
            res.redirect('/')
        } else {
            await db.partner.create({
        name: req.body.name,
        note: req.body.note,
        userId: res.locals.user.id
    })
    .then((partner) => {
        res.redirect('/partners')
    })}}
    catch(err) {
        console.warn(err)
}
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

// select a partner to edit
router.get('/edit/:id', (req,res) => {
    db.partner.findOne({
        where: { id: req.params.id }
    })
    .then((partner) => {
        res.render('partners/edit', {
            partner: partner,
            id: req.params.id
        })
    })
})

// posting the edits
router.put('/:id', async (req, res) => {
    try {
        const changedPartner = await db.partner.update({
            name: req.body.name,
            note: req.body.note,
        }, {where: {
            id: req.params.id
        }})
    res.redirect('/partners')
    } catch (err) {
        console.log(err)
        res.send('server error')
    }
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