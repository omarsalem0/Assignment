import { title } from 'node:process'
import {dataBaseConnetion} from '../../database/connection.js'
let db =await dataBaseConnetion() 

export const book_Explicit =async()=>{
    try {
    let Books =await db.collection('Books',{
            validator:{
                  $jsonSchema:{
                    bsonType:'object',
                    required:['title']
                }
            }})       
           return {ok:1}
    }
     catch (error) {
        console.log(error);
        
    }
}
export const book_Index =async()=>{
    let indexTitle =await db.collection('Books').createIndex({title:1},(err,result)=>{
        if (err) {
            return {massege:' erorr'};
        }return result
        
    })
    return indexTitle
}
export const add_book=async(data)=>{
    let {title,author,year,genres}=data
    let addBook= await db.collection('Books').insertOne({title,author,year,genres})
    if (addBook.acknowledged) {
        return {massege:'book not add'}
    }return addBook
}
export const add_books=async(data)=>{
    let addBooks= await db.collection('Books').insertMany(data)
    if (addBooks.acknowledged && addBooks.insertedCount>=3) {
        return addBooks
    }return {message:'no data added'}
}
export const update_Book =async(title,data)=>{
    let { year } = data;
    let updatedBook = await db.collection('Books').updateOne({title},{$set:{year}})
    if(!(updatedBook.acknowledged &&  updatedBook.modifiedCount)){
        return {message:'book not updated'}

    }return updatedBook
    
    

}
export const book_title=async(title)=>{
  let bookTitle =await db.collection('Books').findone({title}).toArray()
    if (!bookTitle.length){
        return {message:'book not found'}
    }return bookTitle
}
export const book_Year=async(form,to)=>{
    let booksOfYear= await db.collection('Books').find({
        year:{
        $gte:Number(from)
        ,$lte:Number(to)
    }}).toArray()
    if (booksOfYear.length===0) {
         return {massege:'no found book from year 1990 to 2010'}
    }return(booksOfYear)
}
export const book_genre=async(geners)=>{
     let books= await db.collection('Books').find({genres:genre}).toArray()
    if (books.length===0) {
        return {message:'no books found'}
    }return (books)

}
export const book_skip_limit=async()=>{
    let books =await db.collection('Books').find().sort({year:-1}).skip(2).limit(3).toArray()
    if (books.length===0) {
        return {message:'no boooks found'}
    }return books
}
export const book_int=async()=>{
     let books =await db.collection('Books').find({year:{$type:'int'}}).toArray()
    if(books.length===0){
       return {meggage:'no books found or no years integer'}
    }return books
}
export const exclude_genres=async()=>{
     let books =await db.collection('Books').find({genres:{$nin:['Horror','Science Fiction']}}).toArray()
    if (books.length===0) {
     return {message:'no books found '}
    }return (books)
}
export const delete_Book=async(year)=>{
    let deletedBook =await db.collection("Book").deleteMany({year:{$lt:2000}})
    if (deletedBook.acknowledged && deletedBook.modifiedCount) {
        return deletedBook
    }return {masseg:"no book found year less than 2000"}
}
export const aggregate1=async()=>{
     let books =await db.collection('Books').aggregate([
        {$match:{year:{$gt:2000}}},
        {$sort:{year:-1}}
    ]).toArray()
    if(books.length===0){
        return {massege:'no found books'}
    }return books
}
export const aggregate2=async()=>{
    let books=await db.collection("Books").aggregate([
        {$match:{year:{$gt:2000}}},
        {$project:{
            _id:0,
            title:1,
            author:1,
            year:1

        }}
    ]).toArray()
    if (books==0) {
        return {massegs:'books not found'}
    }return  books

}
export const aggregate3=async()=>{
    const books = await db.collection('books').aggregate([
        {$unwind: "$genres"},
        {$project: {
                _id: 0,
                title: 1,
                genres: 1
            }
        }
    ]).toArray();

    if (books.length === 0) return { message: 'books not found' }
    return (books)
}
export const aggregate4 =async()=>{
    let bookJoinLogs= await db.collection.aggregate([
        {$lookup:
            {
                from:'Books',
                localField:'book_id',
                foreignField:'_id',
                as:'book_details'
            } },{
            $project: {
                _id: 0,
                action: 1,
                book_details: {
                    title: 1,
                    author: 1,
                    year: 1
                }
            }
        }
    ]).toArray()
     if (bookJoinLogs.length === 0)return { message: 'no data found' }
    return bookJoinLogs
}