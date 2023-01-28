import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Managers } from 'src/app/models/Managers';
import { ManagersApiService } from 'src/app/services/managers-api.service';

@Component({
  selector: 'app-show-manager',
  templateUrl: './show-manager.component.html',
  styleUrls: ['./show-manager.component.css']
})
export class ShowManagerComponent implements OnInit {
manager:Managers;
id;
  constructor(private serv:ManagersApiService,private activeRoute:ActivatedRoute) { 
   this.id=this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe(data=>{
        this.manager=data;
    })

  }

  ngOnInit(): void {
  }

}
