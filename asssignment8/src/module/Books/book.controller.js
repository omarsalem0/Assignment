import { Router } from "express";
import { add_book, add_books, aggregate1, aggregate2, aggregate3, aggregate4, bokk_title, book_Explicit, book_genre, book_Index, book_int, book_skip_limit, book_Year, delete_Book, exclude_genres, update_Book } from "./book.service.js";
const router =Router() 
router.post('/collection/books',async(req,res)=>{
    let books= await book_Explicit()
    res.json(books)
    

})
router.post("/books/index",async(req,res)=>{
    let indexTitle =await book_Index()
    res.json(indexTitle)
})
router.post('/books',async(req,res)=>{
    let addBook= await add_book(req.body)
    res.json(addBook)
})
router.post('/books/batch',async(req,res)=>{
    let addBooks= await add_books(req.body)
        res.json(addBooks)
    
})
router.patch('/books/:title',async(req,res)=>{
    let updatedBook = await update_Book(req.params.title,req.body)
    res.json(updatedBook)
})
router.get('/books/title',async(req,res)=>{
    let bookTitle =await bokk_title(req.query.title)
    res.json(bookTitle)
})
router.get('/books/year',async(req,res)=>{
    let booksOfYear= await book_Year(req,query.from,req.query.to)
    res.json(booksOfYear)
})
router.get('/books/genre',async(req,res)=>{
    let books= await book_genre(req.query.genre)
    res.json(books)
})
router.get('/books/skip-limit',async(req,res)=>{
    let books =await book_skip_limit()
    res.json(books)

})

router.get('/books/year-integer',async(req,res)=>{
    let books =await book_int()
    res.json(books)
})
router.get('/books/exclude-genres',async(req,res)=>{
    let books =await exclude_genres ()
    res.json(books)
})
router.get('/books/befor=year',async(req,res)=>{
    let deletedBook =await delete_Book(req.query.year) 
         res.json(deletedBook)

})
router.get('/books/aggregate1',async(req,res)=>{
    let books =await aggregate1()
    res.json(books)
})
router.get('/books/aggregate2',async(req,res)=>{
    let books=await aggregate2()
    res.json(books)


})
router.get('/books/aggregate3', async (req, res) => {
    const books = await aggregate3()
    res.json(books);
});
router.get('/books/aggregate4', async (req, res)=>{
    let bookJoinLogs= await aggregate4()
    res.json(bookJoinLogs)
})
export default router