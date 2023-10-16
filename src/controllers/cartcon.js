require('../models/database');
const cart=require('../models/cart');

exports.homepage=async(req,res)=>{
    res.render('index');
}

async function insertDummyRegisterData(){
    try{
        await cart.insertMany([
            {
                "name":"prasitha",
                "email": "123@dsjn",
                "service" : "network",
                "price":"5000"
            },
            
        ]);
    }catch(error){
        console.log('err' + error)
    }
}

insertDummyRegisterData();
/** 
exports.loadhome=async(req,res)=>{
    res.render('cart');
}

const loadhome = async(req,res)=>{
    try{
          const userdata= await registerModel.findOne({mail:email});
          res.render('cart',{user:userdata});
    }catch(error){
      console.log('err'+ error);
    }
}

loadhome();*/