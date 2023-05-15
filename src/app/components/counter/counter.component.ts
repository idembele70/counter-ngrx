import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from 'src/app/ngrx/counter/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(private store: Store<{ count: number }>) {

  }
  handleIncrement = () => {
    this.store.dispatch(increment())
  }
  handleDecrement = () => {
    this.store.dispatch(decrement())
  }
  handleReset = () => {
    this.store.dispatch(decrement())
  }

}
