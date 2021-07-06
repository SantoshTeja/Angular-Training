import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent {

  // showElement:boolean = true;

  // course:string = "java";

  // employees = [
  //   {empId:101, empName:'chiru'},
  //   {empId:102, empName:'uday'}]

  employees:any = []
  errMsg:any;
  constructor(empService:EmployeeService){
    empService.getEmployeesInfo().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
  }

}
