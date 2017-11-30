import { Action } from '@ngrx/store';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export type Actions = Increment | Decrement;