import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
userName;
  constructor( private activeRoute:ActivatedRoute) {
    this.userName=this.activeRoute.snapshot.paramMap.get("name");
   }

  ngOnInit(): void {
  }

}
