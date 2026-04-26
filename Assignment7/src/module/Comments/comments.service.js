export const createBulkOfComments=async(req,res)=>{
    let {comments}=req.body
    let comment=await Comments.bulkCreate(comments)
   res.json({massege:"comments created"})

}
export const updateContentById=async(req,res)=>{
    let{commentId}=req.params
    let{userid,content}=req.body
    let authorizedUser=await Comments.findByPk(commentId)
       if (!authorizedUser) {
        return res.json({message:"You are not authorized to update this comment ."})
       }
       let [updatedComment]=await Comments.update({content},{where:{userid}})
       if (!updatedComment) {
        return res.json({massege:'comment not found'})
       }
       res.json({massege:'comment updated'})
 }
 export const findOrCreate=async(req,res)=>{
    let{postid,userid,content}=req.body
   let [comment,created]=await Comments.findOrCreate({
        where:{postid,userid,content},
        defaults:{postid,userid,content}
    })
    res.json({comment,created})
}
export const allComments=async (req,res) => {
    let {word}=req.query
    let {count,rows}=await Comments.findAndCountAll({where:{
        content:{
            [Op.like]: `%${word}%` }
    }})
    if (count===0) {
        return res.json({massege:'no momments found.'})
    }
    res.json({count,comments:rows})
    
    
}
export const _3MostRecurentComments=async(req,res)=>{
    let{postid}=req.params
    let comments= await Comments.findAll({
        where:{postid},
        order:[['createdAt','DESC']],
        limit:3
    })
    if(comments.length===0){
        return res.json({message:'comments not found'})
    }
    res.json({comments})
}