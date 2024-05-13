const fs = require("fs");

//create directory
fs.mkdir("Ram",(err) => {
    console.log("folder created");
});


//create new file and write a content
fs.writeFile('./ram/mybio.txt',"My name is Ram",(err) => {
    console.log('files created');
});

//append the data to existing file
fs.appendFile('./ram/mybio.txt', "I'm from Mandya.",
 (err) => {
    console.log('successfully appended data');
});

//read content of the file
fs.readFile("./ram/mybio.txt",'utf-8',(err,data) =>{
    console.log(err, data);
});
//rename the file
fs.rename('./ram/mybio.txt','./ram/Mybio.txt',(err) =>{
    console.log('the file renamed successfully');
});

//delete the file
fs.unlink('./ram/Mybio.txt',(err) => {
    console.log('file deleted');

});
//delete the directory
fs.rmdir('ram',(err) => {
    console.log('deleted folder successfully');
});
