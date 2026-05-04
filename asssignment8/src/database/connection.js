import { MongoClient } from "mongodb"

const url='mongodb://localhost:27017'
const client =new MongoClient(url)
export const dataBaseConnetion =async()=>{
    try {
        await client.connect()
        console.log('Connected successfully to server');
        const db= client.db('Books')
         return db   
   } catch (error) {
    console.log(error);
   }

}