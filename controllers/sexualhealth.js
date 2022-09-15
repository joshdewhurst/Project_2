const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')
const app = require('express')

const syphilisUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=syphilis`



router.get('/', (req, res) => {
        res.render('./sexualhealth/home.ejs')
})

router.get('/syphilis', (req,res) => {
    axios.get('https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=syphilis')
    .then((response)=>{
        res.render('./sexualhealth/syphilis.ejs', {
            syphilisData: response.data.Result.Resources.Resource[0].Sections.section[0].Content
        }
 )
    })
})

module.exports = router