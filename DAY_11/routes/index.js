var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require('../controllers/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  const session = req.session;
  session.username = "hitesh";
  res.render('index', { title: 'Express' });
});

router.get('/test ', function(req, res, next) {
  console.log("Redis Value", req.session.username);
  res.render('index', { title: 'Express' });
});

/**
 * @require { email,firstNmae,lastName,password,conformPassword}
 * @description 
 * "Security, performance and edge cases"
 * level - 1------------------------------------
 * email validate - @ /.
 * password validate - min 6char/1uppercase / lowercase
 * password == conformPass
 * level - 2------------------------------------
 * JS / SQL injuction -THA
 * level - 3------------------------------------ 
 * check if email already exists
 * password hash
 * email lowercase
 * and save
 */

router.post('/test', registerInitialCheck, register);

module.exports = router;
