const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('./config/connection');
const User = require('./models/user.model')

const newjwt = (user) => {
    const payload = {
        username: user.username
    };
    const token = jwt.sign(payload, config.secret_key, {expiresIn: '24h' })
    return token;
}

const verifyjwt = (token) => {
    new Promise((resolve,reject) => {
        jwt.verify(token, config.secret_key, (err,payload) => {
            if(err) return reject(err)
            resolve(payload)
        })
    })
}

const getHash = (password) => {
    try {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    } catch (err) {
        return err;
    }
}

const uservalidate = async (info) => {
    var used ;
    var data = await User.findOne({username: info.username.toLowerCase()})
    if(data && data.username){
        used = true;
    } else {
        used = false;
    }
    return used;
}

module.exports = {
    getHash,
    newjwt,
    verifyjwt,
    uservalidate
}