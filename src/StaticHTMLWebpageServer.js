/**
 * Created by Connor on 1/17/2017.
 */
var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public_html'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public_html/Home.html')
})

app.get('/FAQ', function (req, res) {
    res.sendFile(__dirname + '/public_html/FAQ.html')
})

app.get('/About', function (req, res) {
    res.sendFile(__dirname + '/public_html/About.html')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})