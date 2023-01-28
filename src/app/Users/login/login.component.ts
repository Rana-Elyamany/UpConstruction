import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private serv:UsersService,private router:Router) { 
    
  }
  name;
  password;
  errorlogin;
  allData:users[];
  ngOnInit(): void {
  }
  LogIn(){
    this.serv.get().subscribe((data:any)=>{
      let user=data.find(allData=>{
        return allData.name==this.name&&allData.password==this.password;
      })
      if(user){
        console.log("Welcom To Your Account");
        this.router.navigateByUrl(`home/${this.name}`);
      }else{
        this.errorlogin="try again";
      }

    }
      )
  }
}
