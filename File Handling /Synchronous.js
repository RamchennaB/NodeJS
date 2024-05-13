const fs = require("fs");


// create directory

if(!fs.existsSync('Ram')){
    fs.mkdirSync('Ram');
}
else{
    console.log('directory already exists');
}


//create new file and write content

fs.writeFileSync('./files/sample1.txt','Hi this ramchenna');
console.log("file created successfully");



//append content to the file
fs.appendFileSync('./Ram/sample.txt', 'I am MCA graduate');
console.log('file got appended');


//read content from existing file
const data = fs.readFileSync('./files/sample1.txt','utf-8');
console.log(data);


//rename existing file
fs.renameSync('./Ram/sample.txt','./Ram/sample2.txt');
console.log('file renamed succesfully');


//delete file
fs.unlinkSync('./Ram/sample2.txt');
console.log('file deleted succesfully');

//remove directory
fs.rmdirSync('Ram');
console.log('directory deleted');
