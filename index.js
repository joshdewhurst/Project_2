// required packages
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const crypto = require('crypto-js')
const methodOverride = require('method-override')
const axios = require('axios')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

console.log('server secret:', process.env.ENC_SECRET)

// config express app/middlewares
const app = express()
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet()) // Add security headers

// Rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Custom auth middleware
app.use(async (req, res, next) => {
    res.locals.myData = 'hello, fellow route!'
    if (req.cookies.userId) {
        const decryptedId = crypto.AES.decrypt(req.cookies.userId.toString(), process.env.ENC_SECRET)
        const decryptedIdString = decryptedId.toString(crypto.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    } else {
        res.locals.user = null
    }
    next()
})

// Route definitions
app.get('/', (req, res) => {
    console.log('the currently logged in user is:', res.locals.user)
    res.render('home.ejs')
})

// Controllers
app.use('/users', require('./controllers/users'))
app.use('/encounters', require('./controllers/encounters'))
app.use('/partners', require('./controllers/partners'))
app.use('/sexualhealth', require('./controllers/sexualhealth'))

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong! Please try again later.')
})

// Listen on a port
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
