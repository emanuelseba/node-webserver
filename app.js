require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

// Servir contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Emanuel Inostroza',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        nombre: 'Emanuel Inostroza',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: 'Emanuel Inostroza',
        titulo: 'Curso de Node'
    });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});