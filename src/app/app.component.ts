// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  topThreeItems: any[] = [];
  gridData: any[] = [];
  selectedRow: any;

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    // Fetch data from the API
    // this.ApiService.getData().subscribe((data: any) => {

    //   console.log("data",data);
      
    //   // this.topThreeItems = data.balance;
    //   // this.gridData = data.money_statistics;
    //   this.topThreeItems = Object.entries(data.balance);
    //   this.gridData = Object.entries(data.money_statistics);
      
      
    // });
  }


}
