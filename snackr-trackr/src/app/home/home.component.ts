import { Component } from '@angular/core';

export interface Sample {
  id: number;
  name: string;
  size: number;
  sizeUnit: string;
  calories: number;
  sugar: number;
}

const SAMPLE_DATA: Sample[] = [
  {id: 0, name: 'Coke', size: 12, sizeUnit:'fl oz', calories: 140, sugar: 38},
  {id: 0, name: 'Cherry Coke', size: 12, sizeUnit:'fl oz', calories: 140, sugar: 38},
  {id: 0, name: 'Dr. Pepper', size: 12, sizeUnit:'fl oz', calories: 140, sugar: 38},
  {id: 1, name: 'Sprite', size: 12, sizeUnit:'fl oz', calories: 140, sugar: 39}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataSource = SAMPLE_DATA;
  displayedColumns: string[] = ['name', 'size', 'calories', 'sugar'];
}
