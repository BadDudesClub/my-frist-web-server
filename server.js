var express = require('express')

const app = express()

const port = process.argv[2]

app.get('/', function (req, res) {
      res.send('Hello World!')
})

app.listen(port, function () {
      console.log('listening on port', port)
})
