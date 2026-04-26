import {DataTypes, Model} from "sequelize";
import { sequelize } from "../connection.js";

class Posts extends Model{}
Posts.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING
    },
    content:{
        type:DataTypes.TEXT,
    
    },
    userid:{
        type:DataTypes.INTEGER,
        references:{
            model:'users',
            key:'id'
        }
    }
},{ sequelize, 
    timestamps:true,
    paranoid: true,
})
export default Posts