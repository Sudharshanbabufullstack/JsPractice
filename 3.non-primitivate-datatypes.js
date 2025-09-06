// Array : Collection of values []


// Simple Data
var courseName = "JavaScript"; 
console.log(courseName);
          // 0   1    2  3  
let marks = [95, 88, 76, 90];  // As a learning
console.log(marks); // it is  an array indexing is start from 0 
                      //index
let markByIndex = marks[2]; //output is  76
console.log(markByIndex);

let employeeNames = ["Rahul", "Sneha"];
console.log(employeeNames);


// Multiple values in one array
let mixedValues = ["Sneha", 25, false, 50.5];
console.log(mixedValues);


// Real time Example: Employees List
let EmployeesList = [
  {
    "empName": "Ravi",
    "designation": "Developer",
    "empId": "EMP001"
  },
  {
    "empName": "Anjali",
    "designation": "Tester",
    "empId": "EMP002"
  }
];

console.log(EmployeesList);


// Single Object Example
let employee = {
  "empName": "Ravi",
  "designation": "Developer",
  "empId": "EMP001"
};
console.log(employee);


// Object Example: Personal Info
let my_profile = {
  "passportNo": "M1234567",
  "DOB": "15-05-1995",
  "City": "Hyderabad",
  "isEmployee": true,
  "CTC": 550000.75
};

console.log(my_profile);
console.log(my_profile.City);


// Nested Object and Array Example
let my_profile_1 = {
  "passportNo": "M9876543",
  "DOB": "20-10-1992",
  "Children": {
    "firstChild": "Rohit",
    "secondChild": "Priya"
  },
  "Skills": ["Java", "Spring Boot", "React", "SQL"]
};

console.log(my_profile_1);
console.log(my_profile_1.Skills);          // ["Java", "Spring Boot", "React", "SQL"]
console.log(my_profile_1.Skills[2]);       // React
console.log(my_profile_1.Children);        // { firstChild: 'Rohit', secondChild: 'Priya' }
console.log(my_profile_1.Children.secondChild); // Priya



// Mentors Example
let x = 100;
let y = 200;
console.log(x + y); // 300
