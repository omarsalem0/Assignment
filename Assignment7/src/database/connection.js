import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('assignment7', 'root', '', {
  host: 'localhost',
  dialect:'mysql' 
})
export const dataBaseConnection =async()=>{
 try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}

export const dataBaseSync=async()=>{

  try {
      await import ('./model/users.model.js')
      await import('./model/posts.model.js')
      await import('./model/comments.model.js')
      await import('./model/relation.model.js')
      await sequelize.sync()
      console.log('dataBaseSync has been established successfully.');
      
  } catch (error) {
    console.log(error);
    
    
  }

}