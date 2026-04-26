import { Router } from "express";
import Posts from "../../database/model/posts.model.js";
import Users from "../../database/model/users.model.js";
import Comments from "../../database/model/comments.model.js";
import { sequelize } from "../../database/connection.js";
import { allPost, allPostAndCount, deletePost, newPost } from "./post.service.js";
const router=Router()
// Create new Post (using new instance and save)
router.post('/posts',newPost)
// Delete a post by its id
router.delete('/posts/:id',deletePost)
//Retrieve all posts, including the details of the user
router.get('/posts/details',allPost)
// Retrieve all posts and count the number of comments
router.get('/posts/comment-count',allPostAndCount)
// هنا ف مشكله لسه 
export default postRouter