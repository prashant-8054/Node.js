// const amount = 1;

// if (amount < 10) {
//     console.log("Small number");
    
// } else {
//     console.log("Large number");
// }


// console.log("Hello world!");





// setInterval(() => {
//     console.log("Hello world!");
// }, 3000);




// const names = require("./names");
// const sayHi = require("./ipsum");
// const data = require("./alt-flavor");
// require("./bang-bang");


// sayHi("Max");
// sayHi(names.ashu);
// sayHi(names.mithu);





// const os = require("os");

// // info about current user
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds:
// console.log(`The System Uptime is ${os.uptime()} seconds.`);


// const uptime = os.uptime();
// const hours = Math.floor(uptime / 3600);
// const minutes = Math.floor((uptime % 3600) / 60);
// const seconds = Math.floor(uptime % 60);

// console.log(`System Uptime: ${hours}h ${minutes}m ${seconds}s`);


// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// };

// console.log(currentOS);





// const path = require("path");

// console.log(path.sep);

// const filePath = path.join("\\narrative", "text.txt");
// console.log(filePath); // use double backslashes (\\), otherwise the output would remove n from narrative.


// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, "narrative", "text.txt");
// console.log(absolute);






// const {readFileSync, writeFileSync} = require("fs");

// const first = readFileSync("./narrative/first.txt", "utf-8");
// const second = readFileSync("./narrative/second.txt", "utf-8");

// writeFileSync("./narrative/result-sync.txt", `Here is the result: ${first}, ${second}`, {flag: "a"});







// const {readFile, writeFile} = require("fs");

// readFile("./narrative/first.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(result);
//     }
//     const first = result;
//     readFile("./narrative/second.txt", "utf-8", (err, result) => {
//         if(err) {
//             console.log(err);
//             return;
//         } else {
//             console.log(result);
//         }
//         const second = result;
//         writeFile("./narrative/result-async.txt", `Here is the result: ${first}, ${second}`, ((err) => {
//             if(err) {
//                 console.log(err);
//                 return;
//             } else {
//                 console.log("File written successfully!");
//             }
//         }));
//     });
// });








// const {readFileSync, writeFileSync} = require("fs");
// console.log("Start");
// const first = readFileSync("./narrative/first.txt", "utf-8");
// const second = readFileSync("./narrative/second.txt", "utf-8");

// writeFileSync("./narrative/result-sync.txt", `Here is the result: ${first}, ${second}`, {flag: "a"});

// console.log("Done with this task.");
// console.log("Starting with the next one.");







// // Creating a server using http:
// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Welcome to my website!");
//     } else if (req.url === "/about") {
//         res.end("Here is our short history!");
//     } else {
//         res.setHeader("Content-Type", "text/html");
//         res.statusCode = 404;
//         res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you're looking for.</p>
//         <a href="/">Back home</a>
//         `);
//     }
// });

// server.listen(3000);

// // http://localhost:3000/ → You should see "Welcome to my website" as a heading.

// // http://localhost:3000/about → You should see "Here is our short history!" as a heading.

// // http://localhost:3000/something








// const _ = require("lodash");

// const items = [1, [2, [3, [4, [5]]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("Diabolical");









// console.log("First task");
// console.time();
// for (let i = 0; i < 10000000; i++) {
//     const h3 = document.querySelector("h3");
//     h3.textContent = `Hey, everyone is waiting on me.`
// }
// console.timeEnd();

// console.log("Next task");








// // Started operating system process:
// console.log("First task");
// setTimeout(() => {
//     console.log("Second task");
// }, 0);

// console.log("Third task");
// // Completed and exited operating system process.








// setInterval(() => {
//     console.log("Hello world!");
// }, 2000);
// console.log("I will run first.")
// // process stays alive unless
// // Kill process ctrl + C
// // unexpected error







// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("Request event");
//     res.end("Welcome to my homepage");
// });

// server.listen(5000, () => {
//     console.log("Server listening on port: 5000");
// });








// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Home page");
//     }
//     if (req.url === "/about") {
//         // BLOCKING CODE
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`${i} and ${j}`);
//             }
//         }
//         res.end("About Page")
//     }
//     res.end("Error Page")
// })

// server.listen(5000, () => {
//     console.log("Server listening on port 5000...");
// });










// const {readFile, writeFile} = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf-8", (err, data) => {
//     if (err) {
//         reject(err);
//     } else {
//         resolve(data);
//     }
// });
//     });
// }

// // getText("./narrative/first.txt")
// // .then(result => console.log(result))
// // .catch(err => console.log(err));

// const start = async() => {
//     try {
//     const first = await readFilePromise("./narrative/first.txt", "utf-8");
//     const second = await readFilePromise("./narrative/second.txt", "utf-8");
//     await writeFilePromise("./narrative/my-ninja.txt", `HERE WE GO AGAIN: ${first} & ${second}`, {flag: "a"});
//     console.log(first, second);
// } catch(error) {
//     console.log(error);
// }
// };

// start();








// // EVENTS EMITTER:
// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();


// customEmitter.on("response", (name, age) => {
//     console.log(`Data received: the user's name is ${name} and their age is ${age}`);
// });

// customEmitter.on("response", () => {
//     console.log(`Some other logic here`);
// });

// customEmitter.emit("response", "Prashant", 30);











// // Using Event Emitter API:
// const http = require("http");

// const server = http.createServer();
// // emits request event
// // subscribe to it/listen to it/respond to it
// server.on("request", (req, res) => {
//     res.end("Hey, bud!");
// });

// server.listen(5000);









// // STREAMS:
// const {writeFileSync} = require("fs");
// for (let i = 0; i < 10000; i++) {
//     writeFileSync("./narrative/massive.txt", `Hello world ${i}/n`, {flag: "a"});
// }











// const {createReadStream} = require("fs");

// const stream = createReadStream("./narrative/massive.txt");

// stream.on("data", (result) => {
//     console.log(result);
//     // add .toString() after 'result' if you want to see the text instead
// });
// stream.on("error", (err) => {
//     console.log(err);
// });









const http = require("http");
const fs = require("fs");

http.createServer(function(req, res) {
    // const text = fs.readFileSync("./narrative/massive.txt", "utf-8");
    // res.end(text);
    const fileStream = fs.createReadStream("./narrative/massive.txt", "utf-8");
    fileStream.on("open", () => {
        fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
        res.end(err);
    })
}).listen(5000);