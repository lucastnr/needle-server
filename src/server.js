const express = require('express')
const server = express()
const port = 3000
const data = require('./data.json')

server.get('/', (req, res) => {
    console.log(' GET / ')
    res.json(data)
}) 

server.use(express.static('../public'))
server.listen(port, () => console.log(`Server ligado na porta ${port}!`))