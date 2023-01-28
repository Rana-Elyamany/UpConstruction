import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/models/Employees';
import { EmployeesService } from 'src/app/services/Employees.service';

@Component({
  selector: 'app-creat-employees',
  templateUrl: './creat-employees.component.html',
  styleUrls: ['./creat-employees.component.css']
})
export class CreatEmployeesComponent implements OnInit {
employee=new Employees;
message;
  constructor(private serv:EmployeesService,private router:Router) { 

  }
  onSubmit(){
    this.serv.post(this.employee).subscribe(data=>{
      this.message="Data Added successfuly";
      this.router.navigateByUrl("listEmployees");

  }
    );
}
  ngOnInit(): void {
  }

}
