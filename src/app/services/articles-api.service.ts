import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from '../models/Articles';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService extends ApiFunctionService<Articles> {

  constructor(http:HttpClient) { 
    super(http,"http://localhost:3000/Articles")
  }
}
