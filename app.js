const express = require('express');
const app = express();
const path = require('path');

const rutaCarpetaPublica = path.resolve(__dirname, './public');

app.use(express.static(rutaCarpetaPublica));

app.listen (3123, () => {
    console.log('Levantando un servidor con Express');
});/*
app.get('/turing', function (req, res){
    res.sendFile(path.join(__dirname, './views/turing.html'));
*/
app.get('/home', function (req, res){
    res.sendFile(path.join(__dirname, './views/home.html'));
});
app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname, './views/register.html'));
});
app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, './views/login.html'));
});
app.get('/', function (req, res){
    res.send('Saludos Terricola')
});
app.get('/404', (req, res) => {
    res.send('Error página no encontrada');
});