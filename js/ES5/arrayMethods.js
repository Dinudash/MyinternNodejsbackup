//forEach
var arr=[10,20,30,40,50];
var array="";
arr.forEach(myCall);
function myCall(value){
   array+= (value+2) + " " ; //forEach have diff with map method (foreach method don't return anything)
}
console.log(array);

//var arr = [10,20,45,30,101];
//var call= arr.map((val)=>{
 //  return val=val*1;
//});
//console.log(call);

//map
var arr=[10,20,30,40,50];
var array=arr.map((value)=>{
    return value*2  ; //forEach have diff with map method but map return value with array
});
console.log(array);

//filter method
var arr=[10,20,30,40,50];
var array=arr.filter(myFunc);
function myFunc(value){
    return value>=30  ; 
}
console.log(array);

//reduce 
var arr=[10,20,30,40,50];
var array=arr.reduce(myNew);
function myNew(total,value){
   total= total+ value  ;
   return total 
}
console.log(array);

//every
var arr=[10,20,30,40,50];
var array=arr.every(everyFun);
function everyFun(value){
    return value>30  ; 
}
console.log(array);

//some 
var arr=[10,20,30,40,50];
var array=arr.some(someFunc);
function someFunc(value){
    return value>30  ; 
}
console.log(array);
 

//indexOf
const text ="Welcome to my home!!!";
var word=text.indexOf('to');
console.log(word);
//indexOf with start and end
const text1 ="Welcome to my home!!!";
var word=text1.indexOf('to',5);
console.log(word);

//lastIndexOf 
const text2 ="Welcome to my home!!! and welcome all";
var word=text2.lastIndexOf('welcome');
var word=text2.lastIndexOf('see');//if u r seraching for irrelevent string it returns -1
console.log(word);


/*console.log("fliter method")
var array=[10,35,50,60,70]
var box=array.filter(filter);
function filter(value){
  return value>30;
}
console.log(box)  
*/

