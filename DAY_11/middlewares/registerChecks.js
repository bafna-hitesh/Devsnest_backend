/**
 * @param {}req
 * @param {}res
 * @param {}next
 * @description
 * level - 1------------------------------------
 * email validate - @ /.
 * password validate - min 6char/1uppercase / lowercase
 * password == conformPass
 */

const {emailValidate,passwordValidate} = require('../utils/validate');


const registerInitialCheck = (req, res, next) =>{
    console.log(req.body);
    const {email,password,conformPassword} = req.body;
    if(
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof conformPassword === 'string' &&
        email.length > 0 &&
        password.length > 0 &&
        conformPassword === password &&
        emailValidate(email)&&
        passwordValidate(password)
    ) {
        next();
    }else{
        res.status(401).send("initial check fail");
       

    }
};

module.exports = registerInitialCheck;