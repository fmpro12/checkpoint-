
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const cors = require('cors')
const distFolder = path.join(__dirname, '../build')
const users = require('../server/users/server')




app.use(cors())
app.use(bodyParser.json());
app.use("/api/users/", users);
app.get('/', function(req, res) {

  // ejs render automatically looks in the views folder
  res.render(__dirname, '../public/index');
});

app.use(express.static(distFolder))




app.listen(process.env.PORT || 3010)

