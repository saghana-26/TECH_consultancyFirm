const express = require("express");
const mongoose=require("mongoose");
const path=require('path');
const register=require('./src/models/register');
const cart=require('./src/models/cart');
//const admin=require('./src/models/admin');
const app= express();


const port = process.env.PORT|| 5000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true}));

mongoose.set('strictQuery', true);

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/javascript', express.static(__dirname + 'public/javascript'))

require('./src/models/database');


app.set('views',path.join(__dirname, './src/views/pages'));
app.set('view engine','ejs')

const restRouter = require('./src/routes/main');
const registerModel = require('./src/models/register');
const cartModel = require('./src/models/cart');
const AdminModel = require('./src/models/admin');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/', restRouter);
app.use('/register', restRouter);
app.use('/cart',restRouter);
app.use('/admin',restRouter);

app.post('/home',async(req,res)=>{
    try{
         const pass=req.body.pd;
         const conpass=req.body.cpd;
        

         if(pass  === conpass ){
            const registeruser= new register({
                nam: req.body.username,
                mail:req.body.email,
                pass:pass,
                conpass:conpass

            })
           const registered =await  registeruser.save();
           
           res.status(201).render("index");
         }else{
            res.send("password not matching"); 
         }

      }catch(error){
        res.status(400).send(error);
    }
})

app.post("/login",async(req,res)=>{
    try{
           const email=req.body.email;
           const password=req.body.password;
           console.log(`${email} and password is ${password}`)
           const useremail=await registerModel.findOne({mail:email});
           //console.log(useremail);
           if(useremail.pass === password){
               res.status(201).render("home",{user:useremail});
           }else{
            res.render("password not matching");
           }
    }catch(error){
        res.status(400).send("invalid email")
    }
})
/**app.post("/admin",async(req,res)=>{
    try{
           const email=req.body.email;
           const password=req.body.password;
           console.log(`${email} and password is ${password}`)
           const adminemail=await AdminModel.findOne({email:email});
           
           //console.log(useremail);
           if(adminemail.pass === password){
            admin.find({},function(users){
                res.render('admin',{
                    user:users
                })
           })
              
           }else{
            res.render("password not matching");
           }
    }catch(error){
        res.status(400).send("invalid email")
    }
})
**/
app.listen(port,()=>{console.log("listening to the server on http://localhost:5000")});
