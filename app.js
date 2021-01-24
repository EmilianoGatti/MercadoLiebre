const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.listen (3123, () => {
    console.log('Levantando un servidor con Express');
});/*
app.get('/turing', function (req, res){
    res.sendFile(path.join(__dirname, './views/turing.html'));
*/
app.get('/home', function (req, res){
    res.sendFile(path.join(__dirname, './views/home.html'));
});
app.get('/', function (req, res){
    res.send('Saludos Terricola')
});
app.get('/404', (req, res) => {
    res.send('Error página no encontrada');
});