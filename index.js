'use strict'

// eslint-disable-next-line no-unused-vars
const http = require("http");
const musics = require('./data.js');
const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars"); // should be at top of module 

//initialize express server 
const app = express();

const all = musics.getAll();


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

app.get('home.html',(request, response) => {
response.type('text/html');
response.sendFile(__dirname + '/public/home.html');
});


app.get('/', (request, response) =>{
response.render('home', {musics: all});
});


app.get('/detail', (request,response) => {
let index = request.query.index;
let music = all[index];
response.render('detail', {index:index, music: music});
});


app.get('/about',(request,response) => {
response.type('text/plain');
response.send('About page');
});

//handle a POST request
//app.post('/', (req, res) => {
  //console.log(req.body); 
//});//

// define 404 handler
app.use( (request,response) => {
response.type('text/plain'); 
response.status(404);
response.send('404 - Not found');
 });

app.listen(app.get('port'), () => {
console.log('Express started'); 
});
