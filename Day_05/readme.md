# CRUD with fs module

- JavaScript is browser laungage.
- If i want to use js on systeam use Node.js
- Node.js have acces of our systeam.
- If i need to use nodejs i need to provide file location where i want to use nodejs
```
PS C:\Users\Hitesh\Documents\GitHub\devsnet_backend> node
Welcome to Node.js v14.17.5.      
Type ".help" for more information.
>
```
# fs module (File Systeam module)
Importing fs module
```
var fs = require('fs);
```
# CRUD Commands
1. CRAEATE 

- create folder in the directory named day 05
```
fs.mkdirSync("day_05");
```
- creates file named hello.txt inside Day 05 with content Hello using arrow function for error check.
```
fs.writeFileSync('Day_05/hello.txt','Hello aliens',(err)=> {
... if(err){
..... console.log(err)
..... }
... });
```

2. READ
- reads the file and return the data must include utf-8 otherwise we'll get buffer
note(Sequrity, Performance, Edge cases)
```
fs.readFileSync("file/hello.txt","utf-8");
```
3. UPDATE
- If i want to rename file
```
fs.renameSync("day_05/hello.txt","day_05/hello_2.txt");
```
- append text in file content
```
fs.appendFileSync('Day_05/hello.txt','append');
```
4. DELETE
- In order to delete the folder we have to delte the file in it
```
To delete the file

fs.unlinkSync("file/hello3.txt");
```
```
To delete the folder

fs.rmdirSync("file");

```