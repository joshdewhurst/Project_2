const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')
const app = require('express')

const syphilisUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=syphilis`
const chlamGonoUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=gonorrhea`



router.get('/', (req, res) => {
        res.render('./sexualhealth/home.ejs')
})

router.get('/syphilis', (req,res) => {
    axios.get(syphilisUrl)
    .then((response)=>{
        res.render('./sexualhealth/syphilis.ejs', {
            syphilisData: response.data.Result.Resources.Resource[0].Sections.section[0].Content
        }
 )
    })
})

router.get('/chlamydia_gonorrhea', (req,res) => {
    axios.get(chlamGonoUrl)
    .then((response)=>{
        res.render('./sexualhealth/chlamydia_gonorrhea', {
            dataPoint1: response.data.Result.Resources.Resource[0].Sections.section[0].Content,
            dataPoint2: response.data.Result.Resources.Resource[0].Sections.section[1].Content,
            dataPoint3: response.data.Result.Resources.Resource[0].Sections.section[2].Content,
            dataPoint4: response.data.Result.Resources.Resource[0].Sections.section[3].Content,
            dataPoint5: response.data.Result.Resources.Resource[0].Sections.section[4].Content
        })
    })
})

module.exports = router