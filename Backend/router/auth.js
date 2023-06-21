const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/userSchema');


const generateAuthToken = (id)=>{
    return jwt.sign({ id }, process.env.SECRET_KEY , { expiresIn: "1d"} );
}


//  Creating Registration Api

router.post('/register' , async (req,res)=>{
    const {name, email,phone, password,cpassword} = req.body;
    if (!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({ error: "please filled the field properly"});
        console.log("please filled the field properly");
    }
    if(password != cpassword){
        return res.status(422).json({error: "Incorrect Confirm password"});
        console.log("pw not same");
    }
    try {
        const userExist = await User.findOne({email : email});

        if(userExist){
            return res.status(409).json({error: "Email already exist"});
        }else{
            const user = new User({name,email,phone,password,cpassword});
        
            await user.save();
            res.status(201).json({message: "User registered successfully"});
        }

    } catch(err){
        console.log(err);
    }
})

// Creating Login Api

router.post('/login', async (req,res)=>{
    try{
       const {email , password} = req.body
       if (!email || !password){
            return res.status(422).json({ error: "Please filled the data"}); 
       }

       const userLogin = await User.findOne({email : email});
       
       
       if(userLogin){
            const userPassword = await bcrypt.compare(password , userLogin.password);

            let token = generateAuthToken(userLogin._id);
            console.log(token);

            res.cookie("jwtoken" , token ,{
                expires: new Date(Date.now()+ 25892000000),
                httpOnly:true
            });

            if(userPassword){-
                res.status(200).json({ message: "Successfull"});
            }else{
                res.status(409).json({ error : "Invalid Credentials"});
            }
       }else{
            res.status(409).json({ error: "Invalid Credentials"})
       }

    }catch(err){
        console.log(err);
    }

})

router.get('/logout', (req,res)=>{
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send('user logout');
})



module.exports = router;