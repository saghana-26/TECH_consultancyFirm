/**require('../models/database');
const admin=require('../models/admin');

exports.homepage=async(req,res)=>{
    res.render('admin');
}

async function insertData(){
    try{
        await admin.insertMany([
            {
                
                "email": "saghana@gmail.com",
                "pass":"sag1234"
            },
            
        ]);
    }catch(error){
        console.log('err' + error)
    }
}

insertData();**/