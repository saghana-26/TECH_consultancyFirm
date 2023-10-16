const mongoose=require('mongoose');

const adminSchema = new mongoose.Schema({
    email:{
      type: String,
       
    },
    pass:{
      type:String,
      required: 'this feild is required.'
    }
  });
  
  const AdminModel = mongoose.model('admin',adminSchema);
  
  module.exports=AdminModel;