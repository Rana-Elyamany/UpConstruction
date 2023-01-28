import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Managers } from '../models/Managers';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class ManagersApiService extends ApiFunctionService<Managers> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/managers")
   }
}
