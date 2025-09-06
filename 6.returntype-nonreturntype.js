// Return type and Non-return type Functions

// Return type function (returns some data)
function getCompanyName() {
    return "OpenAI Pvt Ltd";
}

// Calling the function and storing result
let company = getCompanyName();
console.log("Company Name:", company);


// Non-return type function (just prints, no return)
function showMessage() {
    console.log("Welcome to the Employee Management System!");
}


// Return type function with Array
function getDepartments() {
    let departments = ["HR", "Finance", "IT", "Sales"];
    return departments;
}

// Calling the functions
showMessage(); // Non-return type

let deptList = getDepartments();  // ["HR", "Finance", "IT", "Sales"]
console.log("Departments:", deptList);

// Updating array value 
deptList[2] = "Engineering";
console.log("Updated Departments:", deptList);
