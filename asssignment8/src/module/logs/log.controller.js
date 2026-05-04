import { Router } from "express";
import { addLogs, logCapped } from "./log.service.js";
const router=Router()

router.post('/collection/logs/capped',async(req,res)=>{
        let logCapped = await logCapped()
        res.json(logCapped)
})
router.post('/logs',async(req,res)=>{
    let addLogs =await addLogs(req.body)
    res.json(addLogs)
})
export default router