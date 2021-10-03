middleware is a function that run beafore main func for just to check that our main excution func is ok!

app.use(middleware_function) -> for all api

use post call for password because its not store in chache

npm install --save body-parser
const body-parser = require("body-parser")

app.post('/',(req,res)=>{
    console.log('req.body',req.body);
    res.json({req.body})
})