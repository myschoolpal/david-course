function sayHello(name) {
    return(`Hi there ${name}!`);
}
let person = 'David'
let greet = sayHello(person);
console.log(greet);

function cb(value, callback){
    return callback(value);
}
cb(20, (x) => console.log(x * 2));

function cb2(value, value2, callback){
    return callback(value, value2);
}
cb2(20, 30, (x, y) => console.log((x + y)*2));

function cb3(value, value2, callback){
    let calc = callback(value, value2);
    console.log(calc);
}
cb3(20, 30, (x, y) => (x + y)*10);
cb3(20, 30, (x, y) =>
{
    return (x + y)*20;
})

function doS(arg1, arg2, arg3 = 5) {
    return(arg1 + arg2 + arg3);
}
console.log(doS(1, 2));
console.log(doS(1, 2, 3));