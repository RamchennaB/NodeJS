
// take input from command line
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('what id your name ?',(name)=>{
    console.log(`Hi:${name}`);
    rl.close();
});
