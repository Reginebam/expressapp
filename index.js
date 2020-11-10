// modules
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// variables
const PORT = process.env.PORT
const dbLink = process.env.dbLink

//routes variables

const bookRoutes = require('./routes/bookRoutes')

// database connection
mongoose.connect(dbLink, { useNewUrlPaerser: true, useUniFiedTopology: true}, () => {
app.listen(PORT, () => {
    console.info(`DATABASE CONNECTER AT  ${PORT}`)
})

}  )


// middleware
app.use(express.json());



//routes
app.use(bookRoutes);


//error page