var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/home', function(req, res) {
    var x = {
        title: 'Home',
        dataChillded: [
            {
                title: 'Average Chilled water Use',
                unit: 'KBTU/HR',
                value: '1607.0982948229'
            }
        ],
        dataHot: [
            {
                title: 'Average Hot water Use',
                unit: 'KBTU/HR',
                value: '380.54830832'
            }
        ],
        dataSteam: [
            {
                title: 'Average Steam Use',
                unit: 'KBTU/HR',
                value: '1552.34315785199'
            }
        ],
        dataElectricity: [
            {
                title: 'Average Electricity Use',
                unit: 'kWh',
                value: '172086.508692129'
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