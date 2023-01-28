import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/models/Articles';
import { ArticlesApiService } from 'src/app/services/articles-api.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles:Articles[];
  constructor(private serv:ArticlesApiService) {
    this.serv.get().subscribe((data:any)=>{
      this.articles=data
    })
   }

  ngOnInit(): void {
  }

}
