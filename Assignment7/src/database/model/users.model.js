import { DataTypes } from "sequelize"
import { sequelize } from "../connection.js"
const Users=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        validate:{
            checkNameLength(value){
                if (value.length<=2) {
                    throw new Error("name must be greater than 2");
                    
                }
            }
        }

    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        len: [5,100],
        validate:{
        checkPasswordLength(value) {
            if (value.length<=6) {
             throw new Error('password must be greater than 6.');
        }

        }
    },
    role:{
        type:DataTypes.ENUM('user','admin'),
        defaultValue:'user'

    }
}})

export default Users