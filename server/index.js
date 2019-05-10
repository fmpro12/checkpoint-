
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const cors = require('cors')
const distFolder = path.join(__dirname, '../build')
const users = require('../server/users/server')

var http = require('http').Server(app)



app.use(cors())
app.use(bodyParser.json());
app.use("/api/users/", users);

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });


app.use(express.static(distFolder))





var server = http.listen(process.env.PORT || 3010, () => {
    console.log('server is running on port', server.address().port);
  });