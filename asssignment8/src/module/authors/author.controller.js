import { Router } from "express";
import { addAuthor } from "./author.service";
const router=Router()

router.post('/collection/authors',async(req,res)=>{
    let addedAuthor= await addAuthor(req.body)
    res.json(addedAuthor)
})
export default router