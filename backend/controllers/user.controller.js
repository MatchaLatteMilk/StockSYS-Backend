const User = require('../models/user.model');

const current = (req,res) => {
    console.log('current')
    res.status(200).json({data: req.user})
}

const showall = async (req,res) => {

    console.log('api/user/showall')
    try{
        User.find({},(err,result) => {
            if(err) console.log(err);
            else {
                res.json(result);
                console.log(result);
            }
        })
    }catch(err){
        res.status(400).end()
    }
}

const removeall = async (req,res) => {
    try{
        console.log('api/user/removeall')
        User.deleteMany({},(err,user) => {
            if(err) console.log(err);
            else {
                res.json(user);
            }
        })
    }catch(err){
        res.status(400).end()
    }
}

module.exports = {
    current,
    showall,
    removeall
}