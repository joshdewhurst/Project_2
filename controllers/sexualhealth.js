const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')
const app = require('express')

const syphilisUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=syphilis`
const chlamGonoUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=gonorrhea`
const hivUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=hiv`
const talkUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=STD%20Testing`



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

router.get('/hiv', (req, res) => {
    axios.get(hivUrl)
    .then((response)=> {
        res.render('./sexualhealth/hiv', {
            dataPoint1: response.data.Result.Resources.Resource[0].Sections.section[0].Content,
            dataPoint2: response.data.Result.Resources.Resource[0].Sections.section[1].Content,
            dataPoint3: response.data.Result.Resources.Resource[0].Sections.section[2].Content,
            dataPoint4: response.data.Result.Resources.Resource[0].Sections.section[3].Content,
            dataPoint5: response.data.Result.Resources.Resource[0].Sections.section[4].Content,
            dataPoint6: response.data.Result.Resources.Resource[0].Sections.section[5].Content,
            dataPoint7: response.data.Result.Resources.Resource[0].Sections.section[6].Content
        })
})
})

router.get('/letstalk', (req, res) => {
    axios.get(talkUrl)
    .then((response) => {
        res.render('./sexualhealth/letstalk', {
            data: response.data.Result.Resources.Resource[0].Sections.section[0].Content
        })
    })
})

module.exports = router