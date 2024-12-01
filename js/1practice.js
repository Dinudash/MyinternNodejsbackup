var arr=[10,20,30,40];
var increment=arr.map(myfunction);

function myfunction(value){
    return value+2;
}
console.log(increment);

var arr=[10,20,30,40];
var fil=arr.filter(fun);

function fun(value){
    return value<25;
}
console.log(fil);

var arr=[10,20,30,40];
var tot=arr.reduce(callfunction);

function callfunction(tot,value){
    return tot+value;
}
console.log(tot);

