// grid.component.ts

import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  data: any = {};
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'name', 'status', 'type', 'amount','action'];
  clickedRows = new Set<any>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  balance: any;

  constructor(private ApiService: ApiService,private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit() {
    setTimeout(() => {
      this.ApiService.data$.subscribe(data => {
        this.data = data;
        this.balance = this.data.balance.total_balance;
        console.log('Data:', this.data.transactions);

        // Don't include 'action' in displayedColumns array
        this.dataSource = new MatTableDataSource(data.transactions);
        if (this.dataSource) {
          this.dataSource.paginator = this.paginator;
        }
      });
    }, 500);
  }

  openDetailsAlert(row: any): void {
    this.dialog.open(DetailsDialogComponent, {
      width: '300px', // Adjust the width as needed
      data: row,
    });
  }
  
}
