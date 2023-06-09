import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
export interface Snack{
  id: number;
  name: string;
  size: number;
  units: string;
  date: string;
}
const SNACKS: Snack[]=[
  {id: 1, name:"Coke", size: 12, units: "fl oz", date: "01-01-2023"},
  {id: 2, name:"Coke", size: 12, units: "fl oz", date: "05-06-2022"},
  {id: 3, name:"Caramel Frap", size: 13.7, units: "fl oz", date: "12-23-1997"}
]


@Component({
  selector: 'app-snack-summ',
  templateUrl: './snack-summ.component.html',
  styleUrls: ['./snack-summ.component.css']
})
export class SnackSummComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'size', 'date'];
  dataSource: MatTableDataSource<Snack>;

  // needs the any to function
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  @ViewChild(MatSort) sort:any = MatSort;
  
  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(SNACKS);
  }
  
  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}