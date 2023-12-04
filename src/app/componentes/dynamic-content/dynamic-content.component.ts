/*import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit {
  @Input() componentName: string = '';

  ngOnInit(): void {
    console.log('Componente activo:', this.componentName);
  }
}
*/
// dynamic-content.component.ts
// dynamic-content.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit {
  activeComponentName: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activeComponentName = this.getActiveComponentName(this.activatedRoute);
    });
  }

  private getActiveComponentName(route: ActivatedRoute): string {
    let routeSnapshot = route;
    while (routeSnapshot.firstChild) {
      routeSnapshot = routeSnapshot.firstChild;
    }

    return routeSnapshot.routeConfig?.data?.breadcrumb || '';
  }

  regresarCarreras() {
    this.router.navigate(['/carreras']);
  }
  regresarHome() {
    this.router.navigate(['/inicio']);
  }
  regresarExitos() {
    this.router.navigate(['/exitos']);
  }

}
