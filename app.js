const express = require('express');
const app = express();

app.use(express. static ('public'));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')

})
app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});


app.get('/inicio', function(req, res) {
    res.send('Inicio');
});    

app.get('/quienessomos', function(req, res) {
    res.send('Quiénes Somos');
});

app.get('/views/register.html', function(req, res) {
    res.sendFile(__dirname + '/views/register.html');
});    

app.get('/views/login.html', function(req, res) {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/carrito', function(req, res) {
    res.send('Carrito');
});

app.get('/buscardisco', function(req, res) {
    res.send('Busca tu Disco');
});

app.get('/buscar', function(req, res) {
    res.send('Buscar Album');
});

app.get('dir_name /views/login.html', function(req, res) {
    res.send('Inicia tu sesión');
});


app.set('view engine', 'ejs');

