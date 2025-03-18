const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const name = 'Alice'
  res.send(`Hello ${name}!`)
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
