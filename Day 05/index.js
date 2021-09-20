var fs = require ("fs");

fs.mkdirSync("day_05"); // make folder

fs.writeFileSync("day_05/hello.txt","Hello Hitesh here!"); // write in the file 

fs.appendFileSync("day_05/hello.txt",'hello');

fs.readFileSync("file/hello.txt"); // it gives buffer in packets (Sequrity, Performance, Edge cases))

fs.readFileSync("file/hello.txt","utf-8");// to read that buffer 

fs.renameSync("file/hello.txt","file/mellow.txt"); // rename the file

fs.unlinkSync("file/hello3.txt"); // delete the file