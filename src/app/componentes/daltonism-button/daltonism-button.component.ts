import { Component, OnInit } from '@angular/core';
import { DaltonismService } from 'src/app/daltonism.service';

@Component({
  selector: 'app-daltonism-button',
  templateUrl: './daltonism-button.component.html',
  styleUrls: ['./daltonism-button.component.css']
})
export class DaltonismButtonComponent implements OnInit {

  constructor(private daltonismService: DaltonismService) { }

  ngOnInit(): void {
  }

  toggleDaltonismo() {
    this.daltonismService.toggleDaltonism();
  }

  get isDaltonism(): boolean {
    return this.daltonismService.isDaltonism;
  }
}
