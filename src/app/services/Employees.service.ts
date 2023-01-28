import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../models/Employees';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends ApiFunctionService<Employees>  {

  constructor(http:HttpClient){
   super(http,"http://localhost:3000/Employees")
  }
}
