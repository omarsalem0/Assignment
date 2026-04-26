import express from "express"
import { dataBaseConnection, dataBaseSync } from "./database/connection.js"
import userRouter from "./module/Users/user.controller.js"
import postRouter from "./module/Posts/post.controller.js"
import commentRouter from "./module/Comments/comment.controller.js"

export const bootStrape=async()=>{
    const app=express()
    dataBaseConnection()
    await dataBaseSync()
    app.use(express.json())
    app.use('/users',userRouter)
    app.use('/posts',postRouter)
    app.use('/comments',commentRouter)
    app.listen(3000,()=>{
        console.log('server is running as port 3000');
        
    })
}