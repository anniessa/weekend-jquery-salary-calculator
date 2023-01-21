console.log('JS');

$(document).ready(onReady);

let employees = [];
let totalMonthlyCosts = 0;

function onReady() {
    console.log('READY!')
    
    $('#addEmployeeForm').on('submit', addEmployee);
    $('#addEmployeeForm').on('submit', addMonthlyCost);

    $(document).on('click', '.delete-employee', deleteEmployee);
    $(document).on('click', '.delete-employee', addMonthlyCost);
    

    render();
}

function addEmployee(evt){
    console.log('in addEmployee', employees);
    evt.preventDefault();
    
    let newEmployee = {
        firstName: $('#firstNameInput').val().toUpperCase(),
        lastName: $('#lastNameInput').val().toUpperCase(),
        id: Number($('#idInput').val()),
        title: $('#titleInput').val().toUpperCase(),
        annualSalary: Number($('#annualSalaryInput').val()),
    }
    
    $('#firstNameInput').val(''), 
    $('#lastNameInput').val(''),
    Number($('#idInput').val('')),
    $('#titleInput').val(''),
    Number($('#annualSalaryInput').val('')),
    
    employees.push(newEmployee);
    render();
}

function addMonthlyCost() {
    totalMonthlyCosts = 0;
    for (let employee of employees) {
    totalMonthlyCosts += (employee.annualSalary / 12);
    }
    console.log('in monthly costs', totalMonthlyCosts);
    render();
}


function deleteEmployee() {
    console.log('in deleteEmployee');
    
    let myTr = $(this).parent().parent();
    let indexOfEmployee = myTr.index();
    console.log('indexOfEmployee', indexOfEmployee);
    employees.splice(indexOfEmployee, 1); 
    render();
}


function render() {
    console.log('in render');
    $('#employee-table').empty();
    
    for (let employee of employees)
    $('#employee-table').append(`
    <tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.id}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}</td>
    <td>
    <button class="delete-employee"> Delete </button>
    </td>
    </tr>
    `)

    console.log(totalMonthlyCosts);

    $('#totalMonthly').text(`Monthly Cost $ ${totalMonthlyCosts}`);

    if (totalMonthlyCosts >= 20000) {
        $('#totalMonthly').addClass("red-background")
    } else {
        $('#totalMonthly').removeClass("red-background")
    }
}