import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from '../models/Customers';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService extends ApiFunctionService<Customers> {

  constructor(http:HttpClient) { 
    super(http,"http://localhost:3000/Customers")
  }
}
