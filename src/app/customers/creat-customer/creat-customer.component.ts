import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/models/Customers';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-creat-customer',
  templateUrl: './creat-customer.component.html',
  styleUrls: ['./creat-customer.component.css']
})
export class CreatCustomerComponent implements OnInit {
  customer=new Customers;
  constructor(private serv:CustomerApiService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.serv.post(this.customer).subscribe(data=>{
      this.router.navigateByUrl("listCustomers")
    })
  }

}
