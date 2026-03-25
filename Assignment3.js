// Q1
// const fs =require("fs")
// const streem =fs.createReadStream("./big.txt" ,{
//    encoding: "utf8" })
// let data=""
// streem.on("data",chunk=> data+=chunk)
// streem.on("end",()=> console.log(data)
// )
// Q2
// const fs =require("fs")
// const ReadStreem=fs.createReadStream("./source.txt",{ encoding: "utf8" })
// const WriteStreem=fs.createWriteStream("./dest.txt",{ encoding: "utf8" })
// ReadStreem.on("data",(chunk)=>{
//     WriteStreem.write(chunk)
// })
// ReadStreem.on("end",()=>{
//     WriteStreem.end()
//     console.log("File copied using streams");

// })
// Q3
// const fs =require("fs")
// const {pipeline}=require("stream")
// pipeline(
//     fs.createReadStream("./data.txt",{encoding:"utf8"}),
//     fs.createWriteStream("./data.txt.gz",{encoding:"utf8"}),
//     (err)=>{
//         if (err) {
//             console.log("error");

//         }else{
//             console.log("File copied using streams");
//         }
//     }
// )

//  part2 

// const http = require("http");
// const fs = require("fs");
// let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
// let server = http.createServer((req, res) => {
//   let { url, method } = req;
//   if (url == "/user" && method == "POST") {
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });
//     req.on("end", () => {
//       try {
//         data = JSON.parse(data);
//         let { name, age, email } = data;
//         let findUser = users.find((user) => user.email === email);
//         if (findUser) {
//             res.end(JSON.stringify({"massage":"Email already exists."}))
//         } else {
//           let id = users.length + 1;
//           users.push({ id, name, age, email });
//           fs.writeFileSync("./Students.json", JSON.stringify(users, null, 2));
//           res.writeHead(201,{"content-type":"Application/json"})
//           res.end(JSON.stringify({"massage":"User added successfully"}))
//         }
//       } catch (err) {
//         res.end("Invalid JSON");
//       }
//     });
//   } else if (url == "/user" && method == "GET") {
//     res.writeHead(200,{"content-type":"Application/json"})
//     res.end(JSON.stringify(users));
//   } else if (url.startsWith("/user/") && method == "GET") {
//     let id =parseInt(url.split("/")[2])
//      if(isNaN(id)){
//         res.writeHead(400,{"content-type":"Application/json"})
//        return res.end("Invalid ID")
//     }
//     let userData = users.find((user) => user.id == id);
//     if (userData) {
//         res.writeHead(200,{"content-type":"Application/json"})
//         res.end(JSON.stringify(userData));
//     } else {
//         res.writeHead(404,{"content-type":"Application/json"})
//         res.end(JSON.stringify({"massage":"user not found"}))
//       }
//   } else if (url.startsWith("/user/") && method == "PATCH") {
//     let id =parseInt(url.split("/")[2])
//     if(isNaN(id)){
//         res.writeHead(400,{"content-type":"Application/json"})
//        return res.end("Invalid ID")
//     }
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });
//     req.on("end", () => {
//       data = JSON.parse(data);
//       let { name, age, grade } = data;
//       let userData = users.find((user) => user.id == id);
//       if (userData) {
//         userData.name = name;
//         userData.age = age;
//         userData.grade = grade;
//         fs.writeFileSync("./students.json", JSON.stringify(users));
//         res.writeHead(200,{"content-type":"Application/json"})
//         res.end(JSON.stringify({"massage":"User Apduted"}))
//       } else {
//         res.writeHead(404,{"content-type":"Application/json"})
//         res.end(JSON.stringify({"massage":"user not found"}))
//   }
// });
//   } else if (url.startsWith("/user/")&& method == "DELETE") {
//        let id=parseInt(url.split("/")[2])
//        if(isNaN(id)){
//         res.writeHead(400,{"content-type":"Application/json"})
//         return res.end("invalid ID")
//        }
//        let findIndex = users.findIndex((user) => user.id == id);
//         if (findIndex!==-1) {
//             users.splice(findIndex, 1);
//             res.writeHead(200,{"content-type":"Application/json"})
//             res.end(JSON.stringify({"massage":"user deleted"}));
//             fs.writeFileSync("./Students.json", JSON.stringify(users));
//       }else{
//           res.writeHead(404, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({"massage":"user not found"}))
//       } 
//  }
// })
// server.listen(3000, () => {
//   console.log("server is running port 3000");
// });

// Part 3
// 1) is a while loop condation while(timeoperation|| osOperation||longtermOperation) is ckeck to excute
// 2) is the libaray to excute the file c++ by main tread =4 virtaul thread to handle asynchronous operations
// 3)Node.js sends async tasks to Libuv, which processes them and pushes the callback to the queue, then the event loop moves it to the call stack.
// 4)Call Stack → Execute synchronous code (LIFO)
// Event Queue (Callback Queue) → Store callbacks waiting to be executed
// Event Loop → Move callbacks from the queue to the stack when it's empty
// 5)The thread pool is a set of worker threads (default = 4) used by Libuv
// 6)Blocking (Synchronous) Code executes line by line and blocks the event loop until finished
// Non-Blocking (Asynchronous) Node.js continues executing other code without waiting 