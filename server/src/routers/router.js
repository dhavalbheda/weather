const express = require('express')
const router = express.Router()

const getCurrentData = require('./../utils/getDataByName')
const getForcastData = require('./../utils/getDataByForcast')

router.get('/weather/:city', (req, res) => {
    // console.log(req.params.city)
    if(!req.params.city){
        return res.send({
            desc: "Must Provide City Name",
            cod:500
        })
    } 
    getCurrentData(req.params.city, (error, data) => {
        if(error)
            return res.json({ error,cod:404 })

        res.json(data)
    })
})

router.get('/weather/forcast/:city', (req, res) => {
    if(!req.params.city){
        return res.status(500).send({
            desc: "Must Provide City Name",
            cod:500
        })
    } 

    getCurrentData(req.params.city, (error, data) => {
        if(error)
            return res.status(200).json({ error,cod:404 })
        else { 
            getForcastData(data.coord.lat, data.coord.lon, (er, dt) => {
                if(error)
                    return res.status(200).json({ er,cod:404 })

                res.status(200).json(dt)
            })
        }
    })
})

router.get('*', (req, res) => {
    res.status(404).send('Page Not Found')
})
module.exports = router