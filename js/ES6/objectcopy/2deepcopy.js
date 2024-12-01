var employee= {
    firstName:"Anil",
    lastName:"Ambani",
    job:"Bussiness analyst"
}

console.log(employee);
//console.log(typeof(employee));


// this is deep copy
var emp2={...employee};
console.log(emp2);

emp2.job="CEO"
console.log("after changing job");
console.log("employee:",employee);
console.log("emp2:",emp2);

employee.email='anil@gmail.com'
console.log("after adding prop ");
console.log("employee:",employee);
console.log("emp2:",emp2);