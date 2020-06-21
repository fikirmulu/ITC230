'use strict'

let musics = [
{title: "myohmy", artist:"Camila Cabelo", genre:"pop", year:2019},
{title: "energy", artist:"Drake", type:"rap",genre:2015},
{title: "umbrella", artist:"Rihanna, JAY-Z",genre:"R & B",year:2007},
{title: "I hope", artist:"Gabby Barrett", genre:"country", year:2019},
{title: "find my way", artist:"da baby", genre:"hip hop", year:2020},

];

exports.getAll = () => {
return musics;
};

//here begins assignment 3
//get Item
// console.log(musics.length);

// const getItem = (title) =>{
//     return musics.find((music) => {
//         return music.title === title;
//     });
// }

// let found = getItem('energy')
// console.log(found)

exports.get = (title) => {
    return musics.find((item) => {
        return item.title.toLowerCase() === title.toLowerCase();
    });
};
//add item

exports.delete = (title) => {
    // retain array length for later comparison after array modification
    const oldLength = musics.length;
    musics = musics.filter((item) => {
        return item.title !== title;
    });
    // if old & new array lengths differ, item was deleted
    return {deleted: oldLength !== musics.length, total: musics.length };
};

exports.add = (newMusic) => {
    const oldLength = musics.length;
    // use existing get() method to check if book already in our list
    let found = this.get(newMusic.title);
    if (!found) {
        musics.push(newMusic);
    }
    // if old & new array lengths differ, item was added
    return {added: oldLength !== musics.length, total: musics.length };
};






