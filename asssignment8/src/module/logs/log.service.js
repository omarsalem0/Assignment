import {dataBaseConnetion} from '../../database/connection.js'
let db =await dataBaseConnetion()
export const logCapped=async()=>{
     try {
        let logCapped =await db.createCollection('logs',{
            capped:true ,size:1048576
            
        })
        return{ok:1}
    } catch (error) {
        console.log(error);
        
    }

}
export const addLogs=async(data)=>{
    let {book_id,action}=data
    let addLogs =await db.collection('logs').insertOne({book_id,action})
    if ( !addLogs.acknowledged) {
        return{massege:'logs not added'}
        
    }return addLogs
}

