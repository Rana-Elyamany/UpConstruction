import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/Employees';
import { EmployeesService } from 'src/app/services/Employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  allData:Employees[];
  constructor(private serv:EmployeesService) { 
    this.serv.get().subscribe((data:any)=>{
      this.allData=data;
    })
  }
  ngOnInit(): void {

  }
  onDelete(id){
    this.serv.delete(id).subscribe(data=>{
      if(confirm){
      location.reload();
      
      }else{
        
      }
    })


  }



}
