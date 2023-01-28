import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/Customers';
import { CustomerApiService } from 'src/app/services/customer-api.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customers:Customers[];
  id;
  constructor(private serv:CustomerApiService ) {
    this.serv.get().subscribe((data:any)=>{
      this.customers=data;
    })

   }

  ngOnInit(): void {
  }
  onDelete(id){
    this.serv.delete(id).subscribe(data=>{
      if(confirm){
        location.reload();
      }else{

      }

    })

  }
}
