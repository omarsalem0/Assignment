import Users from "./users.model.js"
import Posts from './posts.model.js'
import Comments from './comments.model.js'

Users.hasMany(Posts,{
    foreignKey:'userid'
})
Posts.belongsTo(Users,{
    foreignKey:'userid'
})
Users.hasMany(Comments,{
    foreignKey:'userid'
})
Comments.belongsTo(Users,{
    foreignKey:'userid'
})
Posts.hasMany(Comments,{
    foreignKey:'postid'
})
Comments.belongsTo(Posts,{
    foreignKey:'postid'
})
