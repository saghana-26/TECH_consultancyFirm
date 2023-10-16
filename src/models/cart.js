const mongoose=require('mongoose');

const cartSchema = new mongoose.Schema({
    name:{
      type: String,
      required: 'this feild is required.'
    },
    email:{
      type: String,
       
    },
   service:{
      type: String,
      required: 'this feild is required.'
    },
    price:{
      type:Number,
      required: 'this feild is required.'
    }
  });
  
  const cartModel = mongoose.model('cart',cartSchema);
  
  module.exports=cartModel;