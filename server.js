const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

const methodOverride = require('method-override')

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads.')

})

app.get('*', (req, res) => {
    res.send('Error 404: Page not found.')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})