var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/home', function(req, res) {
    var x = {
        title: 'Home',
        dataChillded: [],
        dataHot: [],
        dataSteam: [],
        dataElectricity: [
            {
                title: 'Average Use',
                unit: 'kWh',
                value: '100'
            }
        ]
    }
    res.send(JSON.stringify(x));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})