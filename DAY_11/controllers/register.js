/**
 * @param {*} req 
 * @param {*} res 
 * level - 3------------------------------------ 
 * check if email already exists
 * password hash
 * email lowercase
 * and save
 */

// const User = require('../models/user');  //for postgres
const User = require('../models/mongo'); //for mongo
const bcrypt = require('bcrypt');

const saltRounds = 10;

const register = async ( req, res )=>{
    const { email, password } = req.body;

    try {
        const alreadyExists = await User.findOne({where:{email}});

        if(alreadyExists){
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({email: email.toLowerCase(),password: hash, fullName: "hitesh"});
        const saveUser = await newUser.save();
        res.status(201).send(saveUser);
        

    }catch(err){
        console.error(err);
        res.status(500).send("something went wrong");
    }
}

module.exports = register;