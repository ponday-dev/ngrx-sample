import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import * as CounterAction from '../actions/counter.action';

export interface State {
    counter: number;
}

export const initialState: State = {
    counter: 0
};

export function reducer(state = initialState, action: CounterAction.Actions): State {
    switch(action.type) {
        case CounterAction.INCREMENT: {
            return Object.assign({}, state, { counter: state.counter + 1 });
        }
        case CounterAction.DECREMENT: {
            return Object.assign({}, state, { counter: state.counter - 1});
        }
        default: {
            return state;
        }
    }
}

export const getState = createFeatureSelector<State>('counter');
export const getCounter = createSelector(getState, (state: State) => state.counter);



