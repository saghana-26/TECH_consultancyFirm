/**require('../models/database');
const register=require('../models/register');



async function insertDmmyRegisterData(){
    try{
        await register.insertMany([
            {
                "nam":"prasitha",
                "mail": "prasitha@gmail.com",
                "pass" : "pra1234",
                "conpass":"pra1234"
            },
            
        ]);
    }catch(error){
        console.log('err' + error)
    }
}

insertDmmyRegisterData();**/