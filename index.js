
var http = require("http");
const music = require('./data');
var allMusics = music.getAll();

http.createServer(function(req,res){
  var path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Home Page.' + 'the musics array has: ' + allMusics.length + ' musics');
    break;
    case '/about':
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('About Me: My name is Fikirte Mulugeta. I am in web development truck.');
    break;
    default:
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('404:Page not found.');
}

}).listen(process.env.PORT || 3000);