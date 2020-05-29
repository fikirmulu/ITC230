'use strict'

// eslint-disable-next-line no-unused-vars
const http = require("http");
const musics = require('./data.js');
const Music = require("./models/music");
const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars"); // should be at top of module

//initialize express server 
const app = express();

 // get data

// eslint-disable-next-line no-unused-vars
const all = musics.getAll();

// congigure application
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

app.get('home.html',(request, response,) => {
response.type('text/html');
response.sendFile(__dirname + '/public/home.html');
});

app.get('/', (request, response) => {
  return Music.find({}).lean()
  .then((music) => {
    console.log(music);

    response.send(music)
  }) 
  .catch(err => console.log(err));  
});

app.get('/detail', (request, response) => {
let title = request.query.title;
// let music = all[index];
// response.render('detail', {index:index, music: music}
  Music.findOne({"title":title}).lean()
      .then((music) => {
          response.send(music);
          console.log(music);
      })
      .catch(err => console.log(err));
});

app.get('/delete', (request, response) => {
  let title = request.query.title;
  Music.deleteOne({"title":title}).lean()
  .then((music) => {
    console.log(music)
    response.send(music);
  }) 
  .catch(err => console.log(err));  
});

app.get('/about',(request,response) => {
response.type('text/plain');
response.send('About page');
});

// define 404 handler
app.use( (request,response) => {
response.type('text/plain'); 
response.status(404);
response.send('404 - Not found');
 });

app.listen(app.get('port'), () => {
console.log('Express started'); 
});
