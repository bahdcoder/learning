const express = require('express')

const app = express()

app.get('/users', (req, res) => {
 return res.json(['user 1', 'bahdcoder'])
})

app.listen(process.env.PORT)
