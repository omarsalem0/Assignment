import { Router } from "express";
import Comments from "../../database/model/comments.model.js";
import { Op } from "sequelize";
import { _3MostRecurentComments, allComments, createBulkOfComments, findOrCreate, updateContentById } from "./comments.service.js";

const router =Router()
// Create a bulk of Comments //
router.post('/comments',createBulkOfComments)

// Update the content of a specific comment by its ID.
 router.patch('/comments/:commentId',updateContentById)
// find a comment for a specific post, user, and content.
router.post('/comments/find=or-create',findOrCreate)
// Retrieve all comments that contain a specific word in their content and return the number of comments
router.get('/comments/search',allComments)
// Retrieve the 3 most recent comments
router.get('/comments/newest/:postid',_3MostRecurentComments)

export default commentRouter


