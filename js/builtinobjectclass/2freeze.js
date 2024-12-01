var employee= {
    firstName:"Anil",
    lastName:"Ambani",
    job:"Bussiness analyst"
}

console.log(employee);
console.log(Object.isFrozen(employee));

Object.freeze(employee);
console.log(Object.isFrozen(employee));

//adding new prop
console.log("adding new prop");
employee.email="anil@gmail.com";
console.log(employee);

//modifyig new prop
console.log("modifying new prop");
employee.job="CEO";
console.log(employee);


//deleting new prop
console.log("deleting new prop");
delete employee.job;
console.log(employee);