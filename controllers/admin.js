
const authModel = require("../models/auth");

async function registerAdmin(req,res){
    try{
        const result = await authModel.register(req.body)
        res.status(200).json({message:"Created succesfully",data:result})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}


async function loginAdmin(req,res){
try{
    const result = await authModel.login(req.body);
    console.log(result);
    if(result){
        res.status(200).json({message:"LOGIN SUCESSFULL",result});
    }
    else{
        res.status(400).json({message:"INVALID INFORMATION"});
    }
}
catch(error){
    res.status(500).json({message: error.message});

};

}


module.exports = {registerAdmin,loginAdmin};