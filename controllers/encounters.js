const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /users/new -- render a form to create a new user

router.get('/', async (req, res) => {
    try {
        if (!res.locals.user) {
            res.redirect('/')
        } else {
            db.encounter.findAll({
                include: [db.user]
            })
            .then((encounters) => {
              res.render('./encounters/home.ejs', { encounters: encounters })
            })
        }
} catch(error) {
      console.log('Error in GET /', error)
      res.send('server error')
    }
})

// Getting to the new encounter form
router.get('/new', (req, res) => {
    if (!res.locals.user) {
        res.redirect('/')
    } else {
        res.render('encounters/new.ejs')
}})

// Posting that new encounter
router.post('/', async (req, res) => {
    try {
        if (!res.locals.user) {
            res.redirect('/')
        } else {
        await db.encounter.create({
        date: req.body.date,
        note: req.body.note,
        partnerId: req.body.partnerId,
        userId: res.locals.user.id
    })
    .then((encounter) => {
        res.redirect('/encounters')
    })}
}
catch(err) {
        console.warn(err)
    }
})

// Getting an encounters's information
router.get('/:id', async (req, res) => {
    try {
        const encounter = db.encounter.findOne({
            where: { id: req.params.id },
            include: [db.user]
          })
          .then((encounter) => {
            if (!encounter) throw Error()
            res.render('encounters/show.ejs', { encounter: encounter })
          })
    }
    catch(error) {
      res.send('server error')
    }
  })

//   editting an encounter
router.get('/edit/:id', async (req,res) => {
    try { 
        const encounter = db.encounter.findOne({
        where: { id: req.params.id },
        include: [db.user]
    })
    .then((encounter) => {
        res.render('encounters/edit', {
            encounter: encounter,
            id: req.params.id
        })
    })
} catch (error) {
    res.send('server error')
}
})

// posting the edits
router.put('/:id', async (req, res) => {
    try {
        const changedEncounter = await db.encounter.update({
            date: req.body.date,
            note: req.body.note,
            partnerId: req.body.partnerId
        }, {where: {
            id: req.params.id
        }})
    res.redirect('/encounters')
    } catch (err) {
        console.log(err)
        res.send('server error')
    }
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