
// Exporting / Requiring modules

// const counter = ((arr) => {
//   return 'There are' + arr.length + 'elements'
// }); 

// const adder = ((a,b) => {
//   return `The sum of 2 numbers is ${a+b}`
// });
// const pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// Wwe can also use this method

// module.exports.counter= ((arr) => {
//   return 'There are' + arr.length + 'elements'
// }); 

// module.exports.adder = ((a,b) => {
//   return `The sum of 2 numbers is ${a+b}`
// })

// module.exports.pi =3.142;
 
// Creating a server
// const http = require('http');
// const PORT = 5000;
// const server = http.createServer((req,res) => {
//   console.log('Request was made:' + req.url);
//   res.writeHead(200,{'Content-Type' : 'text-plain'});
// res.end('Hey');

// });

// server.listen(PORT, '127.0.0.1');
// console.log('Now listenting to server');

// Readable Streams

const http = require('http');

const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
myReadStream.on('data', function(chunk) {
  console.log('new chunk recieved' );
  console.log(chunk); 
});