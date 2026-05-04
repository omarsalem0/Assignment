import express from 'express'
import bookRouter from './module/Books/book.controller.js'
import authorRouter from './module/authors/author.controller.js'
import logRouther from './module/logs/log.controller.js'
export const bootSrape=async()=>{
    const app=express()
    app.use(express.json())
    app.use(bookRouter)
    app.use(authorRouter)
    app.use(logRouther)
    

    app.get('/cheek',(req,res)=>{
        res.json({statse:'ok',massege:'server is running'})
    })



    app.listen(3000,()=>{
        console.log("server is running as port 3000");
        
    })
}
