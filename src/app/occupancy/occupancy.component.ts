import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css']
})
export class OccupancyComponent implements OnInit {
  @Input() value!: number;

  constructor() { }

  ngOnInit(): void {
  }

  setGreenProgressBar() {
    return this.value < 25;
  }

  setYellowProgressBar() {
    return this.value >=25 && this.value < 75;
  }

  setRedProgressBar() {
    return this.value >= 75;
  }

}
