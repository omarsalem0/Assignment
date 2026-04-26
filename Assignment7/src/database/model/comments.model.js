import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";
class Comments extends Model {}
Comments.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
  },
  postid: {
    type: DataTypes.INTEGER,
    references: {
      model: "Posts",
      key: "id",
    },
  },
  userid: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  },
},{sequelize});
export default Comments
