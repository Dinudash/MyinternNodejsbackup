// just for practice
const text ="welcome";
for(let i=text.length;i>=0;i--){
   console.log(text[i]);
}
//slice
// const text1="Dinesh"
// var final=text1.slice(0,3)
// console.log(final);


//splice
const text2=["Lemon","Onion","Apple"]
var text3=text2.splice(1,1,"Brinjal","Orange");
console.log(text3);