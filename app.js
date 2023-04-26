const express = require('express');
const app = express();

app.use(express. static ('public'));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')

})
app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('inicio', function(req, res) {
    res.send('Inicio');
});    

app.get('/quienes', function(req, res) {
    res.send('Quiénes Somos');
});

app.get('/Registrate', function(req, res) {
    res.send('Regístrate');
});    

app.get('/iniciar', function(req, res) {
    res.send('Iniciar');
});

app.get('/carrito', function(req, res) {
    res.send('Carrito');
});

app.get('/buscar disco', function(req, res) {
    res.send('Busca tu Disco');
});

app.get('/buscar', function(req, res) {
    res.send('Buscar');
});