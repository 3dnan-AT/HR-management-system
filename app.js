var unique = 0;

function NumberGenerator(){
    return ++unique;
}


function salaryPicker(level){
    var temp = level;
    if(temp === "Senior"){
    return (Math.floor(Math.random() * (2000 - 1500)) + 1500);
    }
    if(level == "Mid-Senior"){
        return (Math.floor(Math.random() * (1500 - 1000)) + 1000);
        
    }
    if(level == "Junior"){
        return (Math.floor(Math.random() * (1000 - 500)) + 500);
        
    }
    return 0;
}

function netSalary(salaryy){
    return salaryy- (salaryy *0.075);
}

const employee = { 
    ID :NumberGenerator(),
    name : "Ghazi Samer",
    Department :"Administration",
    level :"Senior",
    myImage : 'http://qnimate.com/understanding-html-img-tag/',
    salary :salaryPicker(this.level)  
    
}

const employee2 = {
    ID :NumberGenerator(),
    name : "Lana Ali",
    Department :"Finance",
    level :"Senior",
    myImage : 'http://qnimate.com/understanding-html-img-tag/',
    salary : salaryPicker(this.level),
    
}
const employee3 = {
    ID :NumberGenerator(),
    name : "Tamara Ayoub",
    Department :"Marketing",
    level :"Senior",
    myImage : 'http://qnimate.com/understanding-html-img-tag/',
    salary : salaryPicker(this.level),
    
}
const employee4 = {
    ID :NumberGenerator(),
    name : "Safi Walid",
    Department :"Administration",
    level :"Mid-Senior",
    myImage : 'http://qnimate.com/understanding-html-img-tag/',
    salary : salaryPicker(this.level),
    
}
const employee5 = {
    ID :NumberGenerator(),
    name : "Omar Zaid",
    Department :"Development",
    level :"Senior",
    myImage : 'http://qnimate.com/understanding-html-img-tag/',
    salary : salaryPicker(this.level),
    
}
const employee6 = {
    ID :NumberGenerator(),
    name : "Rana Saleh",
    Department :"Development",
    level :"Junior",
    myImage : 'http://qnimate.com/understanding-html-img-tag/',
    salary : salaryPicker(this.level),
    
}
const employee7 = {
    ID :NumberGenerator(),
    name : "Hadi Ahmad",
    Department :"Finance",
    level :"Mid-Senior",
    myImage : 'http://qnimate.com/understanding-html-img-tag/',
    salary : salaryPicker(this.level),   
    
}

employee.salary = salaryPicker(employee.level);
employee.salary = parseInt(netSalary(employee.salary), 10)
employee2.salary = salaryPicker(employee2.level)
employee2.salary = parseInt(netSalary(employee2.salary), 10)
employee3.salary = salaryPicker(employee3.level)
employee3.salary = parseInt(netSalary(employee3.salary), 10)
employee4.salary = salaryPicker(employee4.level)
employee4.salary = parseInt(netSalary(employee4.salary), 10)
employee5.salary = salaryPicker(employee5.level)
employee5.salary = parseInt(netSalary(employee5.salary), 10)
employee6.salary = salaryPicker(employee6.level)
employee6.salary = parseInt(netSalary(employee6.salary), 10)
employee7.salary = salaryPicker(employee7.level)
employee7.salary = parseInt(netSalary(employee7.salary), 10)

console.log("Employee name: " + employee.name ,"\nEmployee Salary: " + employee.salary)
console.log("Employee name: " + employee2.name,"\nEmployee Salary: " + employee2.salary)
console.log("Employee name: " + employee3.name,"\nEmployee Salary: " + employee3.salary)
console.log("Employee name: " + employee4.name,"\nEmployee Salary: " + employee4.salary)
console.log("Employee name: " + employee5.name,"\nEmployee Salary: " + employee5.salary)
console.log("Employee name: " + employee6.name,"\nEmployee Salary: " + employee6.salary)
console.log("Employee name: " + employee7.name,"\nEmployee Salary: " + employee7.salary)