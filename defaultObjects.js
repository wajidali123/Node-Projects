console.log("\n\n"+__filename);
console.log(__dirname);

function printstuff(){
    console.log("setTimeout function demo!!!");
}
setTimeout(printstuff,5000) // used for one time execution of specific function after a specific time
setInterval(printstuff,2000) // used for many time of execution of specific funtion