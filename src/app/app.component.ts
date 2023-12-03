import { Component } from '@angular/core';
import { FormModalComponent } from './form-modal/form-modal.component';
import {Subject}  from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExperienciaUsuario';
  fsSubject = new Subject();
  fsValue = 'fs-11';
  constructor() {this.fsSubject.subscribe((value:any) => {
    this.fsValue = ~value.indexOf('fs-') ? value : `fs-${value}`;
  })
}

fsChanged(event) {
  this.fsSubject.next((event.target.value || 11));
}

}
