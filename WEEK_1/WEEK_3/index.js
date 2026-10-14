function EmployeeInfo(name, Salary)
{
console.log("Welcome " + name + " Your monthly Salary is: " + Salary);
}

// Display current date and time//
const currentDateTime = new Date();
console.log("This is my first program");
console.log("Programe run on : " + currentDateTime.toLocaleString());
var EmpName = "John";
var EmpSalary = 50000;

// Calling the function//
EmployeeInfo(EmpName, EmpSalary);

// Exercise 2//
const EmpSkills= (skills,Name,LabGrp)=> {
console.log("Student ID : "+ Name)
console.log("Lab Group Name : ",LabGrp)
console.log("Expert in "+ skills)
}
EmpSkills("java","3015360","Grp-7")