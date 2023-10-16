const express= require('express')
const restRouter= express.Router()
const register = require('../models/register')
const registerModel= require('../models/register');
//const cartcon=require('../controllers/cartcon');
//const admincon=require('../controllers/admincon');
require('../models/database');

//restRouter.get('/',cartcon.homepage);
//restRouter.get('/',admincon.homepage);
restRouter.get('',async(req,res) =>{
    res.render('index',{title:"web"});
});
restRouter.get('/index',async(req,res) =>{
    res.render('index',{title:"web"});
}); 
restRouter.get('/home',async(req,res) =>{
    res.render('home',{title:"web"});
}); 
restRouter.get('/about',async(req,res) =>{
    res.render('about',{title:"web"});
}); 
restRouter.get('/contact',async(req,res) =>{
    res.render('contact',{title:"web"});
}); 
restRouter.get('/Admin_login',async(req,res) =>{
    res.render('Admin_login',{title:"web"});
});
restRouter.get('/admin',async(req,res) =>{
    res.render('admin',{title:"web"});
}); 
restRouter.get('/cart',async(req,res) =>{
        try{
            //const email=req.body.email;
            const userdata= await registerModel.findOne({mail:req.body.email});
              res.render('cart',{user:userdata});
        }catch(error){
          console.log('err'+ error);
        }
    
});
module.exports= restRouter;