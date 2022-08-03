var unique = 1000;

function IDGenerator(){
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

function employee(employeeName, department, level) {
    this.id = IDGenerator();
    this.employeeName = employeeName;
    this.department = department;
    this.employeeSalary = salaryPicker(level);
    this.level = level;
    
}

const employee1 = new employee("Ghazi Samer", "Administration", "Senior")
const employee2 = new employee("Lana Ali", "Finance", "Senior")
const employee3 = new employee("Tamara Ayoub", "Marketing", "Mid-Senior")
const employee4 = new employee("Safi Walid", "Administration", "Senior")
const employee5 = new employee("Omar Zaid", "Development", "Junior")
const employee6 = new employee("Rana Saleh", "Development", "Mid-Senior")

    

employee.prototype.info = function () {
    document.write(`<div class = "emplo-info"><p>Employee name: ${this.employeeName} <br> Department:  ${this.department} <br> Employee salary: ${this.employeeSalary}</p></div>`);
}

employee1.info()
employee2.info()
employee3.info()
employee4.info()
employee5.info()
employee6.info()





