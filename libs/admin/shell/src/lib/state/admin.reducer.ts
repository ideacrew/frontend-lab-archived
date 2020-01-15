import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AdminActions from './admin.actions';
import { AdminEntity } from './admin.models';

export const ADMIN_FEATURE_KEY = 'admin';

export interface State extends EntityState<AdminEntity> {
  selectedId?: string | number; // which Admin record has been selected
  loaded: boolean; // has the Admin list been loaded
  error?: string | null; // last none error (if any)
}

export interface AdminPartialState {
  readonly [ADMIN_FEATURE_KEY]: State;
}

export const adminAdapter: EntityAdapter<AdminEntity> = createEntityAdapter<
  AdminEntity
>();

export const initialState: State = adminAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const adminReducer = createReducer(
  initialState,
  on(AdminActions.loadAdmin, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(AdminActions.loadAdminSuccess, (state, { admin }) =>
    adminAdapter.addAll(admin, { ...state, loaded: true })
  ),
  on(AdminActions.loadAdminFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return adminReducer(state, action);
}
