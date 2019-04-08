
const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const path = require('path')
const cors = require('cors')
const distFolder = path.join(__dirname, '../fans-league/build')
const users = require('../server/users/server')


server.use(cors())
server.use(bodyParser.json());
server.use("/api/users/", users);

server.use(express.static(distFolder))


server.listen(process.env.PORT || 3010)
