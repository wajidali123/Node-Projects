function printstuff(stuff){
    console.log(stuff);
}

function mainfunction(anotherfunction,value){
    anotherfunction(value);
}
mainfunction(printstuff, "Hello World!!!");

