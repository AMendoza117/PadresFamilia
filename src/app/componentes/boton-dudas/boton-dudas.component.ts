import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-dudas',
  templateUrl: './boton-dudas.component.html',
  styleUrls: ['./boton-dudas.component.css']
})
export class BotonDudasComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToComponent(): void {
    this.router.navigate(['/dudas']); 
  }

  ngOnInit(): void {
  }

}

