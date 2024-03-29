const config = require('../config/connection');
const User = require('../models/user.model');
const { newjwt, verifyjwt, getHash, uservalidate } = require('../service');
const bcrypt = require('bcrypt');

//SIGNUP
const signup = async (req,res) => {
    console.log('/SignUp');
    if(!req.body.username || !req.body.password){
        return res.status(400).send({ message: 'need username & password' })
    }else{

        try{
            const user = req.body;
            var bool = await uservalidate(user);
            if (bool === true){
                res.send({username: "username is already taken"})
            } else {
                user.password = getHash(user.password)
                let newUser = new User({
                    username: user.username,
                    password: user.password
                })
                newUser.save((err,result) => {
                    if(err) console.log(err)
                })
                const token = await newjwt(newUser);
                console.log('newUser', newUser.username);
                console.log(token)
                return res.status(201).send({token})
        }
        } catch (err) {
            return res.status(500).end()
        }
    }
}

//SIGNIN
const signin = async (req,res) => {
    console.log('/SignIn');
    if (!req.body.username || !req.body.password){
        return res.status(400).send({ message: 'need username and password' })
    }
    const invalid = {message: 'Incorrect username or password input'};

    try{
        const user = await User.findOne({ username: req.body.username });
        
        if(!user) {
            return res.status(401).send(invalid);
        }

        const match = await bcrypt.compare(req.body.password, user.password)

        if(!match) {
            return res.status(401).send(invalid);
        }
        
        console.log('Password match')
        const token = newjwt(user);
        return res.status(201).send({token});
    } catch (err) {
        console.error (err);
        res.status(500).end()
    }
}


module.exports = {
    signin,
    signup,
}