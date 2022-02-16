const { log } = require('console');
const http = require('http');

const host = '127.0.0.1';
const port = 1337;

const car = require('./car');
const items = require('./items');

const Factory = require('./factory');
const greeter = Factory();
// console.log( greeter.greet() );

const eventEmitter = require('events').EventEmitter();

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello, world\n');
});


// const x = 1
// const y = 2
// const z = 3
// console.count('The value of x is ' + x + ' and has been checked .. how many times?')
// console.count('The value of x is ' + x + ' and has been checked .. how many times?')
// console.count('The value of y is ' + y + ' and has been checked .. how many times?')
// console.count('x ' + x);
// console.count('x ' + x);
// console.count('x ' + x);
// console.count('x ' + x);

// console.log(process.env.USER);
// console.log(process.env.NVM_BIN);
// console.log('My %s has %d years\nIt costs $%f', 'cat', 2, 200)
// console.log('%o', Number);
// console.clear();
// process.on('SIGTERM', () => {
//     server.close( () => {
//         console.log("Program terminated...");
//     });
// });

const fruits = ['banana', 'orange', 'apple', 'orange', 'orange'];
// const vegs = ['cabbage', 'onion', 'spinach', 'onion', 'potato']

// fruits.forEach( item => {
//     console.count(item);   
// });
// console.log('\n');

// for (const veg of vegs) {
//     console.count(veg);
// }

// const eatFruit = (list) => {
//     for (const item of list) {
//         console.log(`Eat ${item}.`);
//     }
// }
// console.log('\x1b[33m%s\x1b[0m', 'Eat ' + fruits[0]);

// const test = (arr) => {
//     console.time("Time: eatFruit()");
//     eatFruit(arr);
//     console.timeEnd("Time: eatFruit()");
// }

// test(fruits);

const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

// for(let i = 0; i <= 5; i++) {
//    readline.question(`What's your name?`, (name) => {
//       console.log(`Hi ${name}!`)
//       readline.close()
//    })
// }

// readline.question(`What's your name?`, (name) => {
//    console.log(`Hi ${name}!`)
//    readline.close()
// })

// let test = true;

// while(test) {
//    // readline.prompt("what", (name) => {
//    //    console.log(`Hi ${name}!`)
//    //    console.log('fuck');
//    // })

//    // readline.question(``, (name) => {

//    //    if(name === "exit") {
//    //      console.log("Exiting the program..");
//    //      readline.close()
//    //    }

//    //    if(name === "") {
//    //       console.log("Empty!");
//    //    }
//    //    console.log(`Hi ${name}!`)



//    // })

//    test = false;

// }

// console.log("Car", car);
// console.log("Items", items);


// Event Loop
// const bar = () => console.log("bar");
// const baz = () => console.log("baz");

// const foo = () => {
//    console.log("foo");
//    setTimeout(bar, 0);
//    baz();
// }

// foo();

// const sum = (a, b) => {
//    setTimeout( () => {
//       console.log("First");
//    }, 0);
//    console.log("Second");
//    console.log(a + b);
// }

// setTimeout(sum, 5000, 20, 10);

// const done = true;

// const isItDoneYet = new Promise( (resolve, reject) => {
//    if(done) {
//       const workDone = "This is what I worked on...";
//       resolve(workDone);
//    } else {
//       const why = "I have been working on something else...";
//       reject(why);
//    }
// });

// const checkIfItsDone = () => {
//    isItDoneYet
//       .then( (ok) => {
//          console.log('\x1b[33m%s\x1b[0m', ok);
//       })
//       .catch( (err) => {
//          console.log(err);
//       });
// }

// setTimeout( () => {
//    checkIfItsDone();
// }, 4000)

// const doSomethingAsync = () => {
//    return new Promise( (resolve, reject) => {
//       setTimeout(() => resolve("I did something async"), 4000);
//    })
// }

// const doSomething = async() => {
//    console.log( await doSomethingAsync() );
// } 

// console.log("Before...");
// doSomething();
// console.log("After...");


// const https = require('http')
// const options = {
//    hostname: 'localhost',
//    port: 1337,
//    path: '/todos',
//    method: 'GET'
// }

// const req = https.request(options, (res) => {
//    console.log(`statusCode: ${res.statusCode}`)
//    res.on('data', (d) => {
//       process.stdout.write(d)
//    })
// })

// req.on('error', (error) => {
//    console.error(error)
// })
// req.end()

// const fs = require('fs')

// fs.stat('./test.txt', (err, stats) => {
//    if(err) {
//       console.error(err);
//       return;
//    }

//    console.log("stats.isFile(): ", stats.isFile());
//    console.log("stats.isDirectory(): ", stats.isDirectory()); //false
//    console.log("stats.isSymbolicLink(): ", stats.isSymbolicLink()); //false
//    console.log("stats.size: ", stats.size); //1024000 //= 1MB
//    console.log("\n");

// });

// FILE PATHS
// const path = require('path');
// const test = "./test.txt";

// console.log("path.dirname(test): ", path.dirname(test));
// console.log("path.basename(test): ", path.basename(test));
// console.log("path.extname(test): ", path.extname(test));
// console.log("\n");

// fs.readFile('./test.txt', (err, data) => {
//    if(err) {
//       console.error(err);
//       return
//    }

//    console.log("data: ", data);
//    console.log("\n");

// });

// try {
//    const data = fs.readFileSync('./test.txt', 'utf-8');
//    console.log(data);
// } catch (error) {
//    console.error(error);
// }

// let content = "added new text in th file...";

// // fs.writeFile('./test.txt', content, {flag: 'a+'}, (error) => {
// fs.writeFile('./test.txt', content, (error) => {
//    if (error) {
//       console.error(error);
//       return;
//    }

//    console.log("Text added");
// });

// try {
//    const data = fs.readFileSync('./test.txt', 'utf-8');
//    console.log(data);
// } catch (error) {
//    console.error(error);
// }

const os = require('os');
// 74328  - seconds
// 1238.8 - minutes
// 20.646 - hours

// console.log(os.uptime()); 

// console.log(http.METHODS);
console.log(http.STATUS_CODES)



server.listen(port, host, () => {
   console.log('\n');
   console.log(`Server is running at http://${host}:${port}`);
});