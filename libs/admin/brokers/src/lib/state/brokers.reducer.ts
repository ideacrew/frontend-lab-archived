import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BrokersActions from './brokers.actions';
import { BrokersEntity } from './brokers.models';

export const BROKERS_FEATURE_KEY = 'brokers';

export interface State extends EntityState<BrokersEntity> {
  selectedId?: string | number; // which Brokers record has been selected
  loaded: boolean; // has the Brokers list been loaded
  error?: string | null; // last none error (if any)
}

export interface BrokersPartialState {
  readonly [BROKERS_FEATURE_KEY]: State;
}

export const brokersAdapter: EntityAdapter<BrokersEntity> = createEntityAdapter<
  BrokersEntity
>();

export const initialState: State = brokersAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const brokersReducer = createReducer(
  initialState,
  on(BrokersActions.loadBrokers, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(BrokersActions.loadBrokersSuccess, (state, { brokers }) =>
    brokersAdapter.addAll(brokers, { ...state, loaded: true })
  ),
  on(BrokersActions.loadBrokersFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return brokersReducer(state, action);
}
