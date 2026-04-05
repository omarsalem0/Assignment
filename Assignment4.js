import express from "express"
const app =express()
app.use(express.json())
let user=[
{id:1,name:"omar",age:19,},
{id:3,name:"Mohamed",age:30,},
{id:4,name:"Sara",age:27,},
{id:4,name:"nada",age:19,}]
app.get("/get",(req,res)=>
 res.json(user)
)
app.post("/add-user",(req,res)=>{
    let {neme,age}=req.body
    user.push({id:user.length+1,name,age})
    res.json({massege:"user add"})
}
)
app.get("/get-by-id/:id",(req,res)=>{
    let{id}=req.params
    let exiteUser=user.find((user)=>user.id==id)
    if(!exiteUser){
       return res.json({massege:"user is not found"})
    }
    res.json(exiteUser)
})
app.put("/update/:id",(req,res)=>{
    let{id}=req.params
    let{name,age}=req.body
    let exiteUser=user.find((user)=>user.id==id)
    if(!exiteUser){
        return res.json({massege:"user is not found"})
    }
    exiteUser.name=name
    exiteUser.age=age
    res.json({massege:"user updated",exiteUser})
})
app.delete("/delete-user/:id",(req,res)=>{
    let{id}=req.params
    let findeUser=user.findIndex((user)=>user.id==id)
    if (findeUser>-1) {
        user.splice(findeUser,1)
       return res.json({masseg:"user deleted"})
        
    }
    res.json({massege:"user is not found"})

})


app.listen(3001,()=>{
    console.log("server is running as port 3001");
    
})
