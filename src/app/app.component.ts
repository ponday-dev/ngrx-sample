import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as CounterAction from './actions/counter.action';
import * as CounterReducer from './reducers/counter.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter$: Observable<number>;

  constructor(private store: Store<CounterReducer.State>) { }

  ngOnInit() {
    this.counter$ = this.store.select(CounterReducer.getCounter);
  }

  countup() {
    this.store.dispatch(new CounterAction.Increment());
  }

  countdown() {
    this.store.dispatch(new CounterAction.Decrement());
  }
}
