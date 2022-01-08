import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from "@angular/forms";

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

  getEemployees() {
    this.employeeService.getEemployees().subscribe(
      (res) => {
        this.employeeService.employees = res;
      },
      (err) => console.log(err)
    );
  }

  addEmployee(form: NgForm) {
    this.employeeService.createEmployee(form.value).subscribe(
      res => {
        this.getEemployees();
      },
      err => console.log(err)
    );
  }

}
