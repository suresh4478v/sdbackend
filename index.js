require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000 //modify port if needed

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('hello twitter!')
})
app.get('/login', (req, res) => {
    res.send('<h1>please login at the page!</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
