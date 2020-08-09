const app = require('./src/app')
const server = require('http').createServer(app)

const PORT = process.env.PORT || 5000

server.listen(PORT, ()=> console.log(`Server Is Running On ${PORT} port` ))