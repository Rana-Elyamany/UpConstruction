import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/Employees';
import { EmployeesService } from 'src/app/services/Employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Employees;
  id;
  constructor(private serv:EmployeesService,private activeRoute:ActivatedRoute,private route:Router) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.serv.getById(this.id).subscribe(data=>{
        this.employee=data;
      })
   }
   edit(){
    this.serv.put(this.employee,this.id).subscribe(data=>{
      this.route.navigateByUrl("listEmployees")
    })
   }

  ngOnInit(): void {
  }

}
