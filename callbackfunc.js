console.log("Customer 1 order a pizza!!!");
setTimeout(callback,5000);

console.log("Customer 2 order a pizza!!!");
setTimeout(callback,5000);

console.log("Customer 3 order a pizza!!!");
setTimeout(callback,5000);


function callback(){
    console.log("Querying database and wait for 5 seconds!!!");
}