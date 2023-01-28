import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Managers } from 'src/app/models/Managers';
import { ManagersApiService } from 'src/app/services/managers-api.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {
  manager:Managers=new Managers;
  id;
  constructor(private serv:ManagersApiService,private router:Router) {
   }

  ngOnInit(): void {
  }
  onSubmit(){
    confirm("Are you sure?");
    
      if(confirm){
        this.serv.post(this.manager).subscribe(data=>{
          this.router.navigateByUrl("listManagers");
        })
      }else
      {
          this.manager=null;
       }

}
}