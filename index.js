var http = require('http'),
    express = require('express'),
    app = express(),
    redis = require('redis'),
    client = redis.createClient(),
    unserialize = require('php-unserialize').unserializeSession,
    fs = require('fs'),
    mustache = require('mustache');

app.get('/', function(req, res) {
    var cookies = (req.headers.cookie || '').split(';').reduce(function(obj, item) {
        var tmp = (item || '').split('=');
        obj[tmp[0]] = tmp[1];
        return obj;
    }, {});

    if (!cookies.PHPSESSID) {
        return res.redirect('/');
    }

    client.get('PHPSESSID:' + cookies.PHPSESSID, function(err, data) {
        if (err || data === '') {
            return res.redirect('http://localhost:8000');
        }

        fs.readFile('./index.mustache', 'utf-8', function(err, file) {
            return res.send(mustache.render(file, unserialize(data)));
        });
    });
});

app.listen(1337, function() {
    console.log('Server running at http://127.0.0.1:1337/');
});
