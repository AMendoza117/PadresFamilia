import { Component, OnInit } from '@angular/core';
import { ContrastService } from '../contrast.service';

@Component({
  selector: 'app-contrast-button',
  templateUrl: './contrast-button.component.html',
  styleUrls: ['./contrast-button.component.css']
})
export class ContrastButtonComponent implements OnInit {

  constructor(public contrastService: ContrastService) {}

  ngOnInit(): void {
  }

  toggleContrast(): void {
    this.contrastService.toggleContrast();
  }
}
