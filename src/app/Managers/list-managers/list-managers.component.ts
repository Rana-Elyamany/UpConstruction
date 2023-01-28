import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Managers } from 'src/app/models/Managers';
import { ManagersApiService } from 'src/app/services/managers-api.service';

@Component({
  selector: 'app-list-managers',
  templateUrl: './list-managers.component.html',
  styleUrls: ['./list-managers.component.css']
})
export class ListManagersComponent implements OnInit {
managers:Managers[];

  constructor(private serv:ManagersApiService,private router:Router) {
    this.serv.get().subscribe((data:any)=>{
      this.managers=data;
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
