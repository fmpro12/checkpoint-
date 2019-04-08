const mongoose = require('mongoose')
let DB_MONGO = process.env.DB_MONGO || 'mongodb://localhost:27017/users-list'


mongoose.connect(DB_MONGO, { useNewUrlParser: true } )

module.exports = mongoose





