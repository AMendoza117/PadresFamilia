import { Component } from '@angular/core';
import { FormModalComponent } from './form-modal/form-modal.component';
import { Subject } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExperienciaUsuario';
  fsSubject = new Subject();
  fsValue = 'fs-11';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.fsSubject.subscribe((value: any) => {
      this.fsValue = ~value.indexOf('fs-') ? value : `fs-${value}`;
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activeComponentName = this.getActiveComponentName();
    });

  }

  fsChanged(event) {
    this.fsSubject.next((event.target.value || 11));
  }



  activeComponentName: string = '';

  getActiveComponentName(): string {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.component ? route.component['name'] : '';
  }



}
