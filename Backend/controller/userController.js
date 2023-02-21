
const UserModel = require('../models/UserModel');
const asyncHandler = require('express-async-handler');

// register new user 
const contactUser = asyncHandler(async (req,resp)=>{
    // console.log('req'+ JSON.stringify(req));
    console.log('req'+JSON.stringify(req.body) )
    const {username,email,address,phoneno,shopno,garbage} = req.body;
   

    const newUser = await UserModel.create({username,email,address,phoneno,shopno,garbage}) ;
    newUser.save().then(()=>{
        console.log('save text')
        resp.json("Registration Added")
    }).catch((err)=>{
        console.log(err);
        resp.json(err)
        console.log("reg err");
    })
    // if (newUser){
    //     resp.json({"user":newUser,"msg":"user created"});
    // }else{
    //     console.log("something went wrong");
    // }

});



module.exports = {contactUser};