import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-orders',
  templateUrl:'./config-orders.component.html',
  styleUrls: ['./config-orders.component.css'],
})
export class ConfigOrdersComponent implements OnInit { 

  ngOnInit(): void {
      console.log('Ordernes config');
      
  }
}
