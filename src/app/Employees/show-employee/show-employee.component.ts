import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employees } from 'src/app/models/Employees';
import { EmployeesService } from 'src/app/services/Employees.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
employee:Employees;
id;
constructor(private serv:EmployeesService,private activeRoute:ActivatedRoute){
    this.id=this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee);
      
    })
}

  ngOnInit(): void {
  }
  

}
