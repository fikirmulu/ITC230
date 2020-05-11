'use strict'

let musics = [
{title: "myohmy", artist:"Camila Cabelo", type:"pop", year:2019},
{title: "energy", artist:"Drake", type:"rap",year:2015},
{title: "umbrella", artist:"Rihanna, JAY-Z",type:"R & B",year:2007},
{title: "I hope", artist:"Gabby Barrett", type:"country", year:2019},
{title: "find my way", artist:"da baby", type:"hip hop", year:2020},
];

exports.getAll = () => {
return musics;
};

/*exports.getmusic = (title) => {
    return musics.find((music) => {
        return music.title === title;
    })
}*/

