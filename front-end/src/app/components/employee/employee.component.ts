import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEemployees();
  }

  resetForm(form: NgForm) {
    form.reset();
    this.getEemployees();
    return false;
  }

  getEemployees() {
    this.employeeService.getEemployees().subscribe(
      (res) => {
        this.employeeService.employees = res;
      },
      (err) => console.log(err)
    );
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.updateEmployee(form.value).subscribe(
        (res) => {
          this.getEemployees();
          form.reset();
        },
        (err) => console.log(err)
      );
    } else {
      this.employeeService.createEmployee(form.value).subscribe(
        (res) => {
          this.getEemployees();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        (res) => {
          this.getEemployees();
        },
        (err) => console.log(err)
      );
    }
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
}
