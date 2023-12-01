// mouse-events.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MouseEventsService {
  private mouseEnterSubject = new Subject<void>();
  private mouseLeaveSubject = new Subject<void>();

  mouseEnter(): void {
    this.mouseEnterSubject.next();
  }

  mouseLeave(): void {
    this.mouseLeaveSubject.next();
  }

  onMouseEnter(): Observable<void> {
    return this.mouseEnterSubject.asObservable();
  }

  onMouseLeave(): Observable<void> {
    return this.mouseLeaveSubject.asObservable();
  }
}
