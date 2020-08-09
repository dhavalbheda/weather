const request = require('request')

const getForcastData = (lat, lon, callback) => {
    const api = 'https://api.openweathermap.org/data/2.5/onecall?'
    const lon_lat = `lat=${lat}&lon=${lon}`
    const API_KEY = process.env.API_KEY

    const url = `${api}${lon_lat}&units=metric&appid=${API_KEY}`
    // console.log(url)
    request({url, json:true}, (error, {body}={}) => {
        if(error){
            callback("Unable Connect To The Internet",undefined)
        } else if(body.cod === "400") {
            callback("City Not Found", undefined)
        } else if(body.lat && body.lon) {
            callback(undefined, body)
        }
    })
}

module.exports = getForcastData