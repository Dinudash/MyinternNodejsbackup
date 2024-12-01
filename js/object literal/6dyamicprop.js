var employee= {
    firstName:"Anil",
    lastName:"Ambani",
    job:"Bussiness analyst"
}

console.log(employee);

firstName=employee['firstName'];
lastName=employee['lastName'];
job=employee['job'];

console.log("firstName:",firstName);
console.log("lastName:",lastName);
console.log("job:",job);

employee['email']='anil@gmail.com'
console.log(employee);