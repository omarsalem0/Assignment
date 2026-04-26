export const newUser=async(req,res)=>{
    try {
        let{name,email,password,role}=req.body
        let exitUser=await Users.findOne({where:{email}})
        if (exitUser) {
           return res.json({massage:"Email  already exists"});    
        } 
        let user=await Users.build({name,email,password,role})
        await user.save()
        res.json({massage: "User added successfully."})
    } catch (error) {
        console.log(error);    
    }
}
export const createOrUpdate=async(req,res)=>{
    let{id}=req.params
    let{name,email,age,role}=req.body
    let exitUser=await Users.findByPk(id)
    if (exitUser) {
        let [updatedUser]=await Users.update({name,email,age,role},{where:{id},validate:false}) //
        if (!updatedUser) {
            return res.json({massage:'user not created or updated'})
            
        }res.json({massage:'User created or updated successfully'})     
    }else{
        let createdUser=await Users.create({name,email,password,age})
        if (!createdUser) {
            return res.json({massage:'user no created'})
        }res.json({massage:"User created",createdUser})
    }

}
export const findUserBYEmail=async (req,res)=>{
    let{email}=req.query
    let exitUser=await Users.findOne({where:{email}})
    if (!exitUser) {
        return res.json({massage:"no user found"})
    }res.json({massage:"User",exitUser})
}
export const userByPK=async(req,res)=>{
    let{id}=req.params
    let exitUser=await Users.findByPk(id,{attributes:{exclude:['role']}}) //
    if (!exitUser) {
        return res.json({massage:'no user found'})
    }res.json({massage:"User",exitUser})
}