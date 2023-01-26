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

// Readable & Writable Streams

// const http = require('http');

// const fs = require('fs');

// const myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
// myReadStream.on('data', function(chunk) {
//   console.log('new chunk recieved' );
//   console.log(chunk);
// });

// const http = require('http');
// const fs = require('fs');
// // const { ReadStream } = require('tty');

// const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// const myWriteSream = fs.createWriteStream(__dirname + '/writeMe.txt');
// myReadStream.on( 'data',function(chunk) {
//   console.log('new chunk received');
//   console.log(chunk);
//   myWriteSream.write(chunk);
// })

//  Transfering data/html file to server us

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req,res)  {
// console.log('Request was made:' + req.url);

// res.myWriteHead(200, {'Content-Type' : 'Text/html'});
// const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
// myReadStream.pipe(res);
// });

// server.listen(6000, '127.0.0.1');
// console.log('Now Listening');

// serving JSON data

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req,res)  {
// console.log('Request was made:' + req.url);

// res.myWriteHead(200, {'Content-Type' : 'application/json'});
// const myObj = {
//   name : 'jin',
//   jop: 'ninja',
//   age: 32
// };
// res.end(JSON.stringify(myObj));

// });

// server.listen(6000, '127.0.0.1');
// console.log('Now Listening');

// Basic Routing
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req,res)  {
// console.log('Request was made:' + req.url);
// if(req.url === '/home'  || req.url === '/'){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   fs.createReadStream(__dirname + 'index.html').pipe(res)
// } else if (req.url === '/Contact'){
// res.writeHead(200,{'Content-Type' : 'text/html'});
// fs.createReadStream(___dirname + 'contact.html').pipe(res);
// }else if (req.url === 'api/ninja'){
//   const ninja = [{name: 'musa', age: 23}, {name: 'yoshi', age : 34}]
//   res.writeHead(200,{'Content-Type' : 'application/json'})

//   res.end(JSON.stringify(ninja))
// } else {
//   res.writeHead(404, {'Content-Type' : 'text/html'});
//   fs.createReadStream(__dirname + '404.html').pipe(res);
// }

// });

// server.listen(6000, '127.0.0.1');
// console.log('Now Listening');

// EXPRESS

const express = require("express");
require("dotenv").config();

// this enables us to use routing functionality with express
const router = express.Router();

const app = express();
const PORT = process.env.PORT;

const password = process.env.PASSWORD;

// Using the ejs template of express

app.set("view engine", "ejs");

// Including style.css
app.use('/assets', express.static('assets'));

// sending html files
app.get("/", function (req, res, next) {
  const city = "Kyazanga";
  res.render("index", { city });
});

app.get("/contact", function (req, res) {
  res.render("contact", {qs: req.query});
});

//Routing Parameters with Express
app.get("/profile", function (req, res) {
  // res.send('This is a request to set profile with name' + req.params.name)
  const data = { age: 56, job: "ninja", hobbies: ["fishing,soccer,reading"] };
  const newUser = "Nansikombi";
  res.render("profile", {
    person: req.params.name,
    data: data,
    newUser: newUser,
  });
});

app.get("/profile/:name", function (req, res) {
  // res.send('This is a request to set profile with name' + req.params.name)
  const data = { age: 56, job: "ninja", hobbies: ["fishing,soccer,reading"] };
  res.render("profile", { person: req.params.name, data });
});

app.get("/api/user", (req, res) => {
  const user = {
    name: "Muzamiru",
    age: 68,
    location: "Lyantonde",
  };
  res.json(user);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`);
});
