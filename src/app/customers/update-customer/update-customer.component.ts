import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/models/Customers';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
customer:Customers;
id;
  constructor(private serv:CustomerApiService,private activeRoute:ActivatedRoute,private router:Router) { 
    this.id=this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe(data=>{
      this.customer=data;
    })
  }

  ngOnInit(): void {
  }
  edit(){
    this.serv.put(this.customer,this.id).subscribe(data=>{
      this.router.navigateByUrl("listCustomers");
    })
  }

}
