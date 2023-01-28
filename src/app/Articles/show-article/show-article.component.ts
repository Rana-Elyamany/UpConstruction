import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from 'src/app/models/Articles';
import { ArticlesApiService } from 'src/app/services/articles-api.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {
  article:Articles;
  id;
  constructor(private serv:ArticlesApiService,private activeRoute:ActivatedRoute) {
  this.id=this.activeRoute.snapshot.paramMap.get("id");
  this.serv.getById(this.id).subscribe(data=>{
    this.article=data
  })
   }

  ngOnInit(): void {
  }

}
