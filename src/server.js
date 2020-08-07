const express = require('express')
const server = express()
const port = 5000
const data = require('./data.json')

server.get('/', (req, res) => {
    console.log(' GET / ')
    res.json(data)
})

server.get('/login/:email/:password', (req, res) => {
    const { email, password } = req.params
    const client = data.find(cli =>
        cli.email == email && cli.password == password
    )

    res.json(client)
})

server.use(express.static('../public'))
server.listen(process.env.PORT || port, () => console.log(`Server ligado na porta ${port}!`))