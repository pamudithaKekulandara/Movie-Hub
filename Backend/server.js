const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use(require('./routes/record'))
app.use(require('./routes/movie'))
app.use(require('./routes/customer'))
app.use(require('./routes/theater'))
app.use(require('./routes/payment'))

// get driver connection
const dbo = require('./db/conn')

//listen
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  })
  console.log(`Server is running on port: ${port}`)
})
