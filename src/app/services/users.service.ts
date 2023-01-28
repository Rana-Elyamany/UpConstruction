import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../models/users';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiFunctionService<users> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/users");
   }
}
