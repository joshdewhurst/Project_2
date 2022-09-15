const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')
const app = require('express')

const syphilisUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=syphilis`


// router.get('/', async (req, res) => {
//     try {const syphilisResponse = await axios.get(syphilisUrl)

//     const syphilisData = await axios.get(syphilisResponse.data)

//       res.render('./sexualhealth/home.ejs', {
//         syphilis: syphilisData
//       })
//     } catch(err) {
//         console.log(err)
//     }
//    } )

router.get('/', (req, res) => {
    axios.get('https://health.gov/myhealthfinder/api/v3/topicsearch.json?categoryId=28&keyword=syphilis')
    .then((response)=>{
        res.send(response.data.Result.Resources.Resource[0].Sections.section[0].Content)
    })
})

module.exports = router