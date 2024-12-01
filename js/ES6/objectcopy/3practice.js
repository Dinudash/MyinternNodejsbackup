var employee={
    firstName:"anil",
    lastName:"ambani",
    job:"Bussiness analyst"
}
console.log(employee);

//Object.freeze(employee);
//console.log(Object.isFrozen(employee));

Object.seal(employee);
console.log(Object.isSealed(employee));


var emp={...employee};
console.log(emp);

emp.job='CEO'
console.log('after changing job');
console.log("employee:",employee);
console.log("emp2:",emp);

employee.email='anil@gmail.com'
console.log('adding new prop');
console.log("employee:",employee);
console.log("emp2:",emp);





