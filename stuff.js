//  no 1 Requiring /importing from app.js
 
//  const stuff = require('./stuff');

// console.log(stuff.counter(['yuka', 'musa', 'heno']));
// console.log(stuff.addder(5,6));
// console.log(stuff.addder(stuff.pi,5)); 


// no. 2 Node Event Emitter

// const events = require('events');
// const { EventEmitter } = require('stream');
// const util = require('util'); 
 

// const Person = function(name){
//   this.name = name;
// }

// util.inherits(Person,EventEmitter);

// const musa = new person('musa');
// const mary = new person('mary');
// const mark = new person('mark');

// const people = [musa,mary,mark];

// people.forEach(function(person) {
//   person.on('speak', function(mssg) {
//     console.log(person.name + 'said' + mssg);
//   });
// });
// musa.emit('hey');




// Event module

// n0 .3 Reading and writing files

//  const fs = require('fs');

// fs.readFile('readMe.txt', 'utf18' ,function(err,data){
//   fs.readFile('writeMe.txt',data);
// }

// );

// N0 .4 Creating directories with sync

// const fs = require('fs');

// fs.mkdirSync('apex');

//  removing directories you just have to remove the sync key word from mkdirSync

// no-1 creating directories with async

// fs. mkdir(function() {
//   fs.readFile('readMe.txt' ,'utf8', function(err,data) {
//     fs.writeFile('./stuff/writeMe.txt');
//   });

// });

//no-2  removing files/directories

// fs.unlink('writeMe.txt', function() {
//   fs.rmdir('stuff');
// })






