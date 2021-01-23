const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.listen (3123, () => {
    console.log('Levantando un servidor con Express');
});/*
app.get('/turing', function (req, res){
    res.sendFile(path.join(__dirname, './views/turing.html'));
});
app.get('/lovelace', function (req, res){
    res.sendFile(path.join(__dirname, './views/lovelace.html'));
});
app.get('/hopper', function (req, res){
    res.sendFile(path.join(__dirname, './views/hopper.html'));
});
app.get('/hamilton', function (req, res){
    res.sendFile(path.join(__dirname,'./views/hamilton.html'));
});
app.get('/clarke', function (req, res){
    res.sendFile(path.join(__dirname, './views/clarke.html'));
});
app.get('/berners-lee', function (req, res){
    res.sendFile(path.join(__dirname, './views/berners-lee.html'));
});
app.get('/babbage', function (req, res){
    res.sendFile(path.join(__dirname, './views/babbage.html'));
});*/
app.get('/home', function (req, res){
    res.sendFile(path.join(__dirname, './views/index.html'));
});
app.get('/', function (req, res){
    res.send('Saludos Terricola')
});
app.get('/404', (req, res) => {
    res.send('Error página no encontrada');
});