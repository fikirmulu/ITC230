'use strict'

const Music = require("./models/music");


// find all documents 
Music.find({}, (err, items) => {
    // output error if one occurred
    // eslint-disable-next-line no-undef
    if (err) return next(err);
        console.log(items.length);
    
});