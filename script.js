console.log('JS');

$(document).ready(onReady);

let employees = [];

function onReady() {
    console.log('READY!')
    
    $('#addEmployeeForm').on('submit', addEmployee);
    $(document).on('click', '.delete-employee', deleteEmployee);

    render();
}

function addEmployee(evt){
    console.log('in addEmployee', employees);
    evt.preventDefault();

    let newEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: Number($('#idInput').val()),
        title: $('#titleInput').val(),
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
    
}