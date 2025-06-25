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








const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);