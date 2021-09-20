const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const fs = require("fs");

function errorHandaling(err){
 
    console.log(err);
    // console.log("Something went wrong!!!");
}

rl.question("What operation you want \n1.Create a folder\n2.Read a file\n3.Update a folder name\n4.Delete a folder\n", (userInput) =>{
    switch(parseInt(userInput)){
        case 1: 
            rl.question("Enter name of folder?", (ans) =>{
                fs.mkdir(`${ans}`, (err)=>{
                    errorHandaling(err);
                });
                console.log("created succesfully !");
                rl.close();
            });
            break;

            case 2: 
                rl.question("Enter a file name that you want to reat? ", (ans) =>{
                    fs.readFile(`${ans}`,"utf-8", (err,data) =>{
                        errorHandaling(err);
                        console.log(data);
                    })
                 rl.close();
            });
            break;

            case 3: 
                rl.question("Enter path of folder to update name?",(oldName) =>{
                    rl.question("Enter new name of folder with same path?",(newName)=>{
                        fs.rename(`${oldName}`,`${newName}`,(err)=>{
                            errorHandaling(err);
                            console.log("rename suceesfull!");
                        })
                        rl.close();
                    });
            })
            
            break;
            case 4: 
                rl.question("Enter folder name you want to delete?",(folderName)=>{
                    fs.rmdir(`${folderName}`,(err)=>{
                        errorHandaling(err);
                        console.log("delete succesfully!");
                    })
                rl.close();
            })
            break;
            default:
                console.error("Wrong input entered");
    }
    // rl.close();
});