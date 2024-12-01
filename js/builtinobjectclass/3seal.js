var employee= {
    firstName:"Anil",
    lastName:"Ambani",
    job:"Bussiness analyst"
}

console.log(employee);
console.log(Object.isSealed(employee));

Object.seal(employee);
console.log(Object.isSealed(employee));

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