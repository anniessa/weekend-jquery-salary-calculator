console.log('JS');

$(document).ready(onReady);

let employees = [];
let totalMonthlyCosts = 0;

function onReady() {
    console.log('READY!')
    
    $('#addEmployeeForm').on('submit', addEmployee);
    $('#addEmployeeForm').on('submit', calculateMonthlyCost);
    
    $(document).on('click', '.delete-btn', deleteEmployee);
    $(document).on('click', '.delete-btn', calculateMonthlyCost);

    $(document).on('click', '.edit-btn', editEmployee);
    $(document).on('click', '.end-editing', endEdit);
    
    
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

function calculateMonthlyCost() {
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

function editEmployee() {
    console.log('in edit employee button');
    $(this).contentEditable = true;
    $(this).parent().parent().addClass("edit-field");
    
   render();    
}

function endEdit() {
    console.log('in done edit button');
    $(this).contentEditable = false;
    $(this).parent().parent().removeClass("edit-field");
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
    <button class="edit-btn">Edit</button>
    <button class="end-editing">Done Editing</button>
    <button class="delete-btn">Delete</button>
    </td>
    </tr>
    `)
    
    console.log(totalMonthlyCosts);
    
    $('#totalMonthly').text(`Total Monthly Cost: $ ${totalMonthlyCosts}`);
    
    if (totalMonthlyCosts >= 20000) {
        $('#totalMonthly').addClass("red-background")
    } else {
        $('#totalMonthly').removeClass("red-background")
    }    

}