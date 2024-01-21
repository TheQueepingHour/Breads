const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads.')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})