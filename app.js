const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res) {
  res.sendFile('newIndex.html')
})
app.set('port', (process.env.PORT || 3000))
var server = app.listen(app.get('port'), function() {
  server.address().port
  console.log("=====listening on port 3000!!=====")
})
