import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface State {
    counter: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
    counter: fromCounter.reducer
};
