var express = require('express')
var business = require('./business')

const app = express()

const port = process.argv[2]

app.get('/', function (req, res) {
      res.send('Hello World!')
})

app.get('/go/:a/:b', function (req, res) {
      res.send(business.go(Number(req.params['a']), Number(req.params.b)))
})

app.get('/provideValue/:a/:b', function (req, res) {
      res.send(business.provideValue(Number(req.params['a']), Number(req.params.b)))
})

app.get('/synergize/', function( req, res){
      res.send(business.synergize(req.query.a))
})

app.listen(port, function () {
      console.log('listening on port', port)
})
