import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-ngrx';
  count$: Observable<number>
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select("counter")
  }
}
