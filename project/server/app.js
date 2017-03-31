var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    http       = require('http').Server(app),
    path       = require('path'),
    config     = require('./server-config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var applicationPath = __dirname + '/../application/' + config.server.path,
    indexFilePath = applicationPath + '/index.html';

app.use('/', express.static(applicationPath)); // static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function (req, res) {
    res.sendFile(path.join(indexFilePath));
});

http.listen(config.server.port, function () {
    console.log('Listening on 0.0.0.0:' + config.server.port);
});
