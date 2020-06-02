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

app.get('/', (request, response,) => {
  return Music.find({}).lean()
  .then((musics) => {
    console.log(musics);
    response.render('home', {musics: musics});
  }) 
  .catch(err => console.log(err));
  //.catch(err => next(err));
});

app.use('/api', require('cors')());
app.get('/api/musics', (request, response) => {
  return Music.find({}).lean()
    .then((musics) => {
      console.log(musics);
      response.json(musics);
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
app.get('/api/musics/:title', (request, response) => {
  let title = request.params.title;
  // let music = all[index];
  // response.render('detail', {index:index, music: music}
    Music.findOne({"title":title}).lean()
        .then((musics) => {
          response.json(musics);
          console.log(musics);
        })
        .catch(err => console.log(err));
  });

// insert or update a single record
app.post('/api/add', (request, response) => {
  const newMusic= request.body;
  Music.update({'title':newMusic.title}, newMusic, {upsert:true}, (err, result) => {
  if (err) return next(err);
  response.json(result)
  console.log(result);
});
  
});

app.get('/api/delete', (request, response) => {
  let title = request.query.title;
  Music.deleteOne({"title":title}).lean()
  .then((music) => {
    response.json(music);
    console.log(music);
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
