var express = require('express')
var app = express()

app.use(express.static('docs'))

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/docs/index.html')
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
