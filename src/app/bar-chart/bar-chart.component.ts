import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../app.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  topThreeItems: any[] = [];
  gridData: any[] = [];
  selectedRow: any;
  data: any={};
  total_income: any;
  total_expense:any;
  total_investment:any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    setTimeout(() => {
      // Your component initialization logic here
     
    this.ApiService.data$.subscribe(data => {
      this.data = data;
      console.log("data new",data);
      this.total_income=this.data.money_statistics.total_income.value;
      this.total_expense=this.data.money_statistics.total_expense.value;
      this.total_investment=this.data.money_statistics.total_investment.value;
      
    });
    console.log('Component initialized after .5 seconds',this.total_expense);
  }, 500);
    // this.createBarChart();
  }

  ngAfterViewInit() {
    this.createBarChart();
  }
  

  createBarChart() {
    

    Chart.register(...registerables);
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['jan', 'feb', 'Mar','Apr'],
        datasets: [{
          label: 'Money statactis',
          data: [80, 60, 40,100], // Dummy data
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
