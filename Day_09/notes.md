sendFile use to send file from server  to frontend
sendFile send header file also
const path = required('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'day_09/public/test.txt'));
    //another way... 
    res.download(path.join(dirname,'day_09/public/test.txt'),"hellp.json")
})



