import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Managers } from 'src/app/models/Managers';
import { ManagersApiService } from 'src/app/services/managers-api.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {
  manager:Managers;
  id;
  constructor(private serv:ManagersApiService,private activeRoute:ActivatedRoute,private router:Router) { 
    this.id=this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe(data=>{
      this.manager=data;
    })
    
  }

  ngOnInit(): void {
  }
  edit(){
    this.serv.put(this.manager,this.id).subscribe(data=>{
      this.router.navigateByUrl("listManagers");
      confirm("Are You Sure ?")

    })
  }

}
