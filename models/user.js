import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
  givenName: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String 
  },
 
  isActive: {
    type: String,
    default: true
  },
  role: {
    type: String,
    required:true
  },
  image:{
    type: String,
  }
 
  
});

const Users = mongoose.model("users", UsersSchema);

export default Users;
