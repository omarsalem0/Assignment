import {dataBaseConnetion} from '../../database/connection.js'
let db =await dataBaseConnetion()
export const addAuthor =async(data)=>{
    let{name,nationality}=data
     let addAuthor= await db.collection('authros').insertOne({name,nationality})
    if (!addAuthor.acknowledged) {
        return {massege:'aurhor not add'}
    }return addAuthor
}