// // q1
// const path =require("path")

// let path_file =(file,dir)=>{
//     console.log(`file: ${file}`);
//     console.log(`dir: ${dir}`);
//     }
// path_file(__filename,__dirname)
    
// // q2
// const path =require("path")
// let filename =(file)=>path.basename(file)
// console.log(filename(__filename));

// // q3
// const path=require("path")
// let file ={ dir: "/folder", name: "app", ext: ".js"}
// let formatfile=(file)=>path.format(file)
// console.log(formatfile(file));

// // q4
// const path =require ("path")
// let FileExtension=(file)=>path.extname(file)
// console.log(FileExtension("/docs/readme.md"));

// // q5
// const path =require ("path")
// let ParseFile=(file)=>path.parse(file)
// console.log(ParseFile("/home/app/main.js"));

// // q6
// const path =require("path")
// let TruePath=(file)=>path.isAbsolute(file)
// console.log(TruePath("/home/user/file.txt"));

// // q7
// const { log } = require("console")
// const path =require("path")
// let joinPath=(file1,file2,file3)=>path.join(file1,file2,file3)
// log(joinPath("src","components", "App.js"))

// // q8
// const path =require("path")
// let resolvePath=(file)=>path.resolve(file)
// console.log(resolvePath("./index.js"));

// // q9
// const path =require("path")
// let joinPath=(folder1,folder2)=>path.join(folder1,folder2)
// console.log(joinPath('/folder1','folder2/file.txt'));

// // q10
// const fs = require("fs")
// const path = require("path")

// let removeFile = (filePath)=>{
//     fs.unlink(filePath,(err)=>{
//         if (err){
//             console.log("error file")
//             return
//         }
//         console.log(`The ${path.basename(filePath)} is deleted.`)
//     })
// }
// let file='/path/to/file.txt'
// removeFile(file)

// // q11
// const fs =require("fs")
// let CreateFile= (folderName)=>{
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName)
//         return "Success";
//     }
//     return "Folder already exists"
    
// }
// let folder ="./folder1"
// console.log(CreateFile(folder));

// // q12
// const {EventEmitter}=require("events")
// let event =new EventEmitter()
// event.on("start",()=>{
//     console.log("Welcome event triggered!");
//    })
// event.emit("start")

// // q13
// const {EventEmitter} =require("events")
// let event=new EventEmitter()
// event.on("login",(Name)=>{
//     console.log(`"User logged in: ${Name}"`);
    
// })
// event.emit("login",'Ahmed')
// // q14
// const fs =require("fs")
// let data =fs.readFileSync("./notes.txt","utf8")
// console.log(`the file contant => ${data}`);
// // q15
// fs.writeFile("./async.txt","Async save","utf8",(err)=>{
//     if (err){
//         console.log("Error writing file:");
//         return
        
//     }
//     console.log("File saved successfully")
    
// })
// // q16
// const fs =require ("fs")
// let fileName="./notes.txt"
// if (fs.existsSync(fileName)){
//     console.log("True");
    
// }else{
//     console.log("dosn't exist");
    
// }
// // q17
// const {platform,arch}=require("process")
// let OS =()=>`platform : ${platform} Arch: ${arch}`

// console.log(OS());

