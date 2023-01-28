import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/app/models/Customers';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
customer:Customers;
id;
  constructor(private serv:CustomerApiService,private activeRoute:ActivatedRoute) { 
    this.id=this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getById(this.id).subscribe(data=>{
      this.customer=data;
    });
    

  }

  ngOnInit(): void {
  }


}
