export const newPost=async (req,res)=>{
    try {
        let{title,content,userid}=req.body
        const post =new Posts({title,content,userid})
        await post.save()
        res.json({massage:'Post created successfully'})
    } catch (error) {
        console.log(error);
        
    }

}
export const deletePost=async(req,res)=>{
try {
        let {id}=req.params
        let exitPost=await Posts.findByPk(id)
        if (!exitPost) {
            return res.json({message:'Post not found'})
        }if (parseInt(id)==exitPost.userid) {
            let deletedPost=await exitPost.destroy()
            return res.json({message:'Post deleted'})   
        }
        res.json({massage:'You are not authorized to delete this post'})
} catch (error) {
    console.log(error);
       
}}
export const allPost=async(req,res)=>{
    let posts=await Posts.findAll({
        attributes:['id','title'],
        include:[
            {model:Users,
            attributes:['id','name']},
            {model:Comments,
         attributes:['id','content']
        }]
})
if (posts.length===0) {
    return res.json({message:'posts about users not found'})
}
res.json({message:'ALL details about posts',posts})
}
export const allPostAndCount=async(req,res)=>{
    let {commentCount,rows}=await Posts.findAndCountAll({
        attributes:['id','title'],
        include:{
            model:Comments,
            attributes:[sequelize.fn('COUNT','content')]
        }
        
    })
}