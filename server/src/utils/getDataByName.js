const request = require('request')

const getCurrentData = (city='Rajkot',callback) => {
    const api = "https://api.openweathermap.org/data/2.5/weather?q="
    const API_LEY = process.env.API_KEY

    const url = `${api}${city}&units=metric&appid=${API_LEY}`

    request({url , json : true},(error,{body}={}) => {
        // console.log('6',url)
        if(error) {
            console.log('1')
            callback("Unable Connect To The Internet",undefined)
        } else if (body.cod === "404") {
            // console.log('2')
            callback("City Not Found",undefined)
        } else if (body.cod === 200) {
            // console.log('3')
            callback(undefined,body)
        }
    })
}

module.exports = getCurrentData