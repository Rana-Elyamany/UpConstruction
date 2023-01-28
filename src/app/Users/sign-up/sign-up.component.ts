import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users=new users;
  constructor(private serv:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  SignUp(){
    this.serv.post(this.users).subscribe(data=>{
      this.router.navigateByUrl("login");
    }
      )
  }

}
